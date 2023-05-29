import React, { FC, useEffect } from 'react';

import { Box, Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertShowing } from '@redux/alert.slice';
import { AppDispatch, RootState } from '@store';
import { globalConstants } from '@constants';

import { MainWrapperProps } from './MainWrapper.types';
import { StyledMainWrapper } from './MainWrapper.styles';

export const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  const { ALERT_DURATION } = globalConstants;
  const { isShowingAlert, message } = useSelector(
    (store: RootState) => store.data.alert,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setAlertShowing(isShowingAlert);
  }, [isShowingAlert]);

  const handleClose = () => {
    dispatch(
      setAlertShowing({
        status: 0,
        isShowingAlert: false,
        message: '',
      }),
    );
  };

  return (
    <StyledMainWrapper>
      <Box
        sx={{
          paddingX: { xs: '1rem', sm: '0' },
          minHeight: '80vh',
          minWidth: {
            xs: '100%',
            sm: '35rem',
            md: '50rem',
            lg: '70rem',
          },
        }}
      >
        {children}
      </Box>
      {isShowingAlert ? (
        <Snackbar
          sx={{
            marginBottom: '3rem',
            left: { sm: 'auto' },
          }}
          open={isShowingAlert}
          autoHideDuration={ALERT_DURATION}
          onClose={handleClose}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      ) : null}
    </StyledMainWrapper>
  );
};
