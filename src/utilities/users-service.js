//Module to organize functions used to sign-up, login,logout
import * from './users-api'

//* Get Token





//* Sign Up function 
export async function signUp(userData){
    const token = await usersApi.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
}