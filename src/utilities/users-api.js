//Module to make AJAX requests to the Express Server , user-related communications with the server


const BASE_URL = 'api/users';

//* Sign Up 
export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }
  