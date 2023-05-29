export const BASE_URL = 'https://api.github.com';

export const SEARCH = (per_page: number) =>
  `${BASE_URL}/search/users?per_page=${per_page}`;

export const LOGIN = () => `${BASE_URL}/user`;

export const FOLLOW = (username: string) =>
  `${BASE_URL}/user/following/${username}`;

export const USER = (username: string) => `${BASE_URL}/users/${username}`;

export const FOLLOWERS = (username: string) =>
  `${BASE_URL}/users/${username}/followers`;

export const FOLLOWING = (username: string) =>
  `${BASE_URL}/users/${username}/following`;

export const SUGGESTIONS = (per_page: number, page: number) => `
  ${BASE_URL}/search/users?q=sort:followers&order:desc&per_page=${per_page}&page=${page}`;
