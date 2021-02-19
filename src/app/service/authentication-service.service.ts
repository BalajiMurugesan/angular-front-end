import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  authenticate(userName, password) {
    if (userName === 'Balaji' && password === 'balaji'){
      sessionStorage.setItem('authenticatedUser' , userName)
      return true;
    }
    return false;
  }

  isUserLoggedIn () {
    let user = sessionStorage.getItem('authenticatedUser')
    //console.log("User" + user)
    return !(user === null)
  }
}
