import { Suggestions } from '@redux/suggestions.slice';
import { UserCredential } from '@redux/login.slice';
import { AlertType } from '@redux/alert.slice';

/**
 * function to load state from local storage
 * @returns state - state to be stored in local storage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 * function to load state into local storage
 * @param state - state stored in local storage
 */
export const saveState = (state: {
  credentials: UserCredential;
  suggestions: Suggestions;
  alert: AlertType;
}) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
