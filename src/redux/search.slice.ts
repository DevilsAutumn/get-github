import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SEARCH } from '@constants';

/**
 * function to search for user based on given query
 * @param {string} criteria - the search query to get users for
 * @return {Array} returns array of objects
 */
export const searchOnGithub = createAsyncThunk(
  'users/searchUser',
  async (criteria: string) => {
    const response = await axios.get(`${SEARCH(5)}&q=${criteria}`);
    return {
      data: response.data,
      status: response.status,
    };
  },
);
