import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/users-list/users-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient: HttpClient) { }

  getUserData(userId) {
    console.log(userId)
    return this.httpClient.get<User>(`http://localhost:8080/users/${userId}`);   
 }

 getAllUsers(){
   let headers = this.createHeaders()
   return this.httpClient.get<User[]>('http://localhost:8080/users/', {headers});
 }
 
 deleteUser(userId) {
   return this.httpClient.delete(`http://localhost:8080/users/${userId}`);
 }

 createHeaders(){
   let userName = 'admin'
   let password = 'admin'
  let basicAuthHeader = 'Basic' + window.btoa(userName + ":" + password)
  let headers = new HttpHeaders({
    Authorization : basicAuthHeader 
  });
  return headers
 }
}


