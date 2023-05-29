import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userCredentialReducer } from '@redux/login.slice';
import { suggestionsReducer } from '@redux/suggestions.slice';
import { alertReducer } from '@redux/alert.slice';
import { loadState, saveState } from '@utils';

const rootReducer = combineReducers({
  credentials: userCredentialReducer,
  suggestions: suggestionsReducer,
  alert: alertReducer,
});

// set store with reducer
export const store = configureStore({
  reducer: {
    data: rootReducer,
  },
  preloadedState: {
    data: loadState(),
  },
});

store.subscribe(() => {
  saveState(store.getState().data);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
