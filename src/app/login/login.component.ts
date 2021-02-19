import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = 'Balaji'
  password : string = 'balaji'
  constructor(private router: Router,
    private authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log("test")
    if(this.authenticationService.authenticate(this.userName, this.password)) {
      console.log(this.userName)
      this.router.navigate(['usersList'])
    } 
    
    //console.log(this.userName)
    // console.log(this.password)
  }

}
