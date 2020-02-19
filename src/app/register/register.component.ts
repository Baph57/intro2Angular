import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegistration = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log(this.model);
    }, error => {
      console.error(error);
    }
    );
  }

  cancel() {
    this.cancelRegistration.emit(false);
    console.log('cancelled');
  }

}
