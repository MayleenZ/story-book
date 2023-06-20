
//* SignUpForm.jsx <--> users-api.js <-Internet-> server.js (Express)

//interacts with server's API endpoints for user-related operations. 


//retrieves token from local storage
function getToken() {
      const token = localStorage.getItem('token');
      
      // if there is no token
      console.log(token);
      if (!token) return null;
  
      const payload = JSON.parse(atob(token.split('.')[1]));
      // console.log(payload);
  
      // if token is expired
      if (payload.exp < Date.now() / 1000) {
          localStorage.removeItem('token');
          return null;
      }
  
      // token is valid
      return token;
  
  }


  //user related endpoint
const BASE_URL = '/api/users';



//* SignUp
export function signUpAPI(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
  //return sendRequest function, with URL, POST method and userData as payload 
}


//* Login
export function loginAPI(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
  //endpoint for login, POST method and credentials as payload
}

//* Check Token
export function checkTokenAPI() {
    return sendRequest(`${BASE_URL}/check-token`)
    //endpoint for checkToken, default GET method and payload null
} 

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {

  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }


  const token = getToken();

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
