import axios from 'axios';
import { store } from '@store';
import { setAlertShowing } from '@redux/alert.slice';
import { loadState } from '@utils';
import { errorStatusCodes, errorMessages } from '@constants';

const { ERROR } = errorStatusCodes;
const { USER_UNAUTHORIZED, API_LIMIT_EXCEEDED, INVALID_REQUEST } =
  errorMessages;

axios.interceptors.request.use(
  (config) => {
    if (loadState().credentials.accessToken !== '') {
      config.headers!.Authorization = `Bearer ${
        loadState().credentials.accessToken
      }`;
    } else if (config.params?.token) {
      config.headers!.Authorization = `Bearer ${config.params.token}`;
    }

    return config;
  },
  (error) => {
    store.dispatch(
      setAlertShowing({
        status: error.response.status,
        isShowingAlert: true,
        message: error.response.data.message,
      }),
    );
    return error.response;
  },
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === ERROR.UNAUTHORIZED) {
      store.dispatch(
        setAlertShowing({
          status: error.response.status,
          isShowingAlert: true,
          message: USER_UNAUTHORIZED,
        }),
      );
    } else if (
      error.response.status === ERROR.RATE_LIMIT_EXCEEDED ||
      error.response.status === ERROR.TOO_MANY_REQUESTS
    ) {
      store.dispatch(
        setAlertShowing({
          status: error.response.status,
          isShowingAlert: true,
          message: API_LIMIT_EXCEEDED,
        }),
      );
    } else {
      store.dispatch(
        setAlertShowing({
          status: error.response.status,
          isShowingAlert: true,
          message: INVALID_REQUEST,
        }),
      );
    }
    return error.response;
  },
);
