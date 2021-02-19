import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../service/data/user-details.service';
import { Router } from '@angular/router';

export class User{ 
  constructor(
    public userId : number,
    public firstName : string,
    public lastName : string
   ){

  }
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  successMessage : string
  errorMessage : string

  usersList : User[]
  constructor(
    private route : Router,
    private userService : UserDetailsService
    ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
     resp => this.usersList = resp 
    )
  }
  getUserData(userId) {
    this.route.navigate(['users', userId])
  }
  
  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe (
      resp => {
        console.log(resp)
        this.successMessage = "User deleted successfully"
        this.getAllUsers()
      });
  }
}
