import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  model: any = {};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login()
  {
    //observables must be subscribed to
    this.authenticationService.login(this.model).subscribe(
    next => {
      console.log("logged in successfully")
    },
    error => {
      console.log("error in login")
    }
    ) 
  }

}
