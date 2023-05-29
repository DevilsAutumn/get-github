import { createSlice } from '@reduxjs/toolkit';

export interface AlertType {
  status: number;
  isShowingAlert: boolean;
  message: string;
}

const initialState: AlertType = {
  status: 0,
  isShowingAlert: false,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertShowing: (
      state,
      { payload: { status, isShowingAlert, message } },
    ) => {
      state.status = status;
      state.isShowingAlert = isShowingAlert;
      state.message = message;
    },
  },
});

export const { setAlertShowing } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;
