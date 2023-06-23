const BASE_URL = '/api/characters'

//API functionalities
//Create, Read, Update , Delete

export function sendForm(charData){
    return sendRequest(`${BASE_URL}/create`, 'POST', charData)
}

export function getChar(userId){
    return sendRequest(`${BASE_URL}/`)
}











//--Helper Function

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