import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Menu } from '../../models/menu.model';
import { map, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { ROLES } from '../../utils/const.utils';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.components.css']
})
export class LoginComponent implements OnInit {

  recuerdame = false;
  email: string;
  menu: [];
  

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
    this.authService.login(data.email, data.password, data.recuerdame);   
  }

  onCreateWithGOO() {
    this.authService.CreateUserWithGoogle();
  }

  onResetPassword(email: string) {
    this.authService.resetPassword(email);
  }


}
