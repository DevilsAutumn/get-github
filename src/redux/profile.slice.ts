import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER, FOLLOWERS, FOLLOWING, FOLLOW } from '@constants';

/**
 * Function to get user information
 * @param  {string} username username of user to get data for
 * @return response data object
 */
export const getUser = createAsyncThunk(
  'user/getUser',
  async (username: string) => {
    try {
      const res = await axios.get(USER(username));
      return res.data;
    } catch (error) {
      return undefined;
    }
  },
);

/**
 * funtion to get user followers list
 * @param  {string} username username of user to get data for
 * @return response data object
 */
export const getFollowers = createAsyncThunk(
  'user/getFollowers',
  async (username: string) => {
    try {
      const res = await axios.get(FOLLOWERS(username));
      return res.data;
    } catch (error) {
      return [];
    }
  },
);

/**
 * function to get user following list
 * @param  {string} username username of user to get data for
 * @return response data object
 */
export const getFollowing = createAsyncThunk(
  'user/getFollowing',
  async (username: string) => {
    try {
      const res = await axios.get(FOLLOWING(username));
      return res.data;
    } catch (error) {
      return [];
    }
  },
);

/**
 * function to follow a user
 * @param  {string} username username of user to follow
 * @param  {string} accesstoken accesstoken of logged in user
 */
export const followOnGithub = createAsyncThunk(
  'user/followUser',
  async (username: string) => {
    try {
      const res = await axios.put(FOLLOW(username));
      return res;
    } catch (error) {
      return error;
    }
  },
);
