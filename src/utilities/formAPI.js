const BASE_URL = '/api/characters'

//API functionalities
//Create, Read, Update , Delete

export function sendForm(charData, userId){
    return sendRequest(`${BASE_URL}/create-char/${userId}`, 'POST', charData)
    //sending form to endpoint defined in routes/characters, creating the character
}

export function getChar(userId){
    //make sure the userID is getting passed down from mongoDB so with each login, only the user gets their own characters 
    return sendRequest(`${BASE_URL}/all-char/${userId}`, 'GET')
}

export function deleteChar(id, userId){
    return sendRequest(`${BASE_URL}/all-char/${id}/${userId}`, 'DELETE')
}

export function editChar(id, userId, editData){
    return sendRequest(`${BASE_URL}/edit-char/${id}/${userId}`, 'PUT', editData)
}

export function getCharById(id, userId){
    return sendRequest(`${BASE_URL}/${id}/${userId}`)
}

// router.get('/all-char', charCtrl.allCharacters)
// router.get(':/id', charCtrl.getCharacter)
// router.post('/create-char', charCtrl.createCharacter)
// router.delete('/all-char/:id', charCtrl.deleteCharacter)
// router.put('/edit-char/:id', charCtrl.editCharacter)









//--Helper Function
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