export const errorStatusCodes = {
  SUCCESS: {
    OK: 200,
    UPDATED: 201,
    REQUEST_ACCEPTED: 202,
  },
  ERROR: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    RATE_LIMIT_EXCEEDED: 403,
    TOO_MANY_REQUESTS: 429,
  },
};

export const errorMessages = {
  USER_UNAUTHORIZED: 'Invalid Access Token',
  API_LIMIT_EXCEEDED: 'Please Try Again After Some Time',
  INVALID_REQUEST: 'Something Went Wrong, Please Try Again',
};

export const successMessages = {
  SUCCESS_RESPONSE: 'Loading Results...',
};
