import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  //isUserLoggedIn: boolean = false;
  constructor(public authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
