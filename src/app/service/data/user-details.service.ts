import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/users-list/users-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

   hostName : string

  constructor(private httpClient: HttpClient) {
    this.hostName = window.location.hostname;
    console.log(this.hostName)
  }

  getUserData(userId) {
    console.log(userId)
    return this.httpClient.get<User>(`${this.hostName}/${userId}`);
 }

 getAllUsers(){
   let headers = this.createHeaders()
   return this.httpClient.get<User[]>(`${this.hostName}/users/`, {headers});
 }

 deleteUser(userId) {
   return this.httpClient.delete(`${this.hostName}/${userId}`);
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
