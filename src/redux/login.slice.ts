import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserType } from '@components';
import { FOLLOWERS, FOLLOWING, LOGIN } from '@constants';

export interface UserCredential {
  isLoggedIn: boolean;
  user: UserType;
  followers: UserType[];
  following: UserType[];
  accessToken: string;
}

const initialState: UserCredential = {
  isLoggedIn: false,
  user: {
    id: 0,
    login: '',
    html_url: '',
    location: '',
    name: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    followers_url: '',
  },
  followers: [],
  following: [],
  accessToken: '',
};

/**
 * function to authenticate user and enable login
 * @param {string} accesstoken - accesstoken to be used to login
 * @return {object} returns response object
 */
export const loginOnGithub = createAsyncThunk(
  'users/loginUser',
  async (accesstoken: string) => {
    const response = await axios.get(LOGIN(), {
      params: {
        token: accesstoken,
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  },
);

/**
 * function to set followers list of loggedin user in store
 * @param {string} username - username of the logged in user
 * @return {object} returns response object
 */
export const setFollowers = createAsyncThunk(
  'followers/getFollowers',
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
 * function to set following list of logged in user in store
 * @param {string} username - username of the logged in user
 * @return {object} returns response object
 */
export const setFollowing = createAsyncThunk(
  'following/getFollowing',
  async (username: string) => {
    try {
      const res = await axios.get(FOLLOWING(username));
      return res.data;
    } catch (error) {
      return [];
    }
  },
);

export const userCredentialSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredential: (
      state,
      { payload: { isLoggedIn, user, accessToken, followers, following } },
    ) => {
      state.isLoggedIn = isLoggedIn;
      state.user = user;
      state.accessToken = accessToken;
      state.followers = followers;
      state.following = following;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setFollowers.fulfilled, (state, action) => {
      state.followers = action.payload;
    });
    builder.addCase(setFollowing.fulfilled, (state, action) => {
      state.following = action.payload;
    });
  },
});

export const { setCredential } = userCredentialSlice.actions;

export const userCredentialReducer = userCredentialSlice.reducer;
