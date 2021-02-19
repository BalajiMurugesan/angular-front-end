import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteGuardService } from '../service/route-guard.service';
import { UserDetailsService } from '../service/data/user-details.service';
import { User } from 'src/app/users-list/users-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  name = ''
  userId : number
  successMessage : String
  errorMessage : String

  constructor(private route: ActivatedRoute, 
    public routeGaurd: RouteGuardService,
    private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId']
    console.log(this.userService.getUserData(this.userId))
    this.userService.getUserData(this.userId).subscribe( 
      resp => this.handleSuccess(resp)

    );
  }

  getUserData(userId) {

    this.userService.getUserData(userId)
  }

  handleSuccess(response) {
    console.log(response)
    this.successMessage = response.lastName
  }
  
}
