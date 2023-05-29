import axios from 'axios';
import { SUGGESTIONS } from '@constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserType } from '@components';

export interface Suggestions {
  suggestions: UserType[];
  page: number;
}

const initialState: Suggestions = {
  suggestions: [],
  page: 1,
};

/**
 * function to fetch suggested users and save in store
 * @param  {string} 'suggestions/setSuggestions'- used to generate Redux action type constants
 * @param  {number} perPage - number of results to get per page
 * @param  {string} accesstoken - accesstoken of the user
 * @param  {number} page - current page of results
 * @return {object} returns response object
 */
export const setSuggestions = createAsyncThunk(
  'suggestions/setSuggestions',
  async ({ perPage, page }: { perPage: number; page: number }) => {
    try {
      const response = await axios.get(SUGGESTIONS(perPage, page));

      return { items: response.data.items, page };
    } catch (error) {
      return { items: [], page: 0 };
    }
  },
);

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    removeSuggestion: (state, action) => {
      state.suggestions = state.suggestions.filter(
        (user) => user.id !== action.payload,
      );
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setSuggestions.fulfilled,
      (state, { payload: { items, page } }) => {
        items.forEach((element: UserType) => {
          state.suggestions.push(element);
        });
        state.page = page;
      },
    );
  },
});

export const { removeSuggestion, clearSuggestions } = suggestionsSlice.actions;

export const suggestionsReducer = suggestionsSlice.reducer;
