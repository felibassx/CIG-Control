import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.components.css']
})
export class LoginComponent implements OnInit {

  recuerdame = false;
  email: string;
  

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    init_plugins();
    
    this.email = localStorage.getItem('email') || '';
    if ( this.email !== '' ) {
      this.recuerdame = true;
    }
  }

  onSubmit( data: any ) {

    console.log(data);
    this.authService.login(data.email, data.password, data.recuerdame);
   
  }

  onCreateWithGOO() {
    this.authService.CreateUserWithGoogle();
  }

  onResetPassword(email: string) {
    this.authService.resetPassword(email);
  }

}
