import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ROLES } from 'src/app/utils/const.utils';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.components.css']
})
export class RegisterComponent implements OnInit {

  cargando = false;
  subscription: Subscription;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    init_plugins();
  }

  onSubmit( data: any ) {

    const role = ROLES.USER_ROLE;
    const birdDate = '1981-04-09T00:00:00';

    this.authService.createUser(data.nameUser, new Date(birdDate), data.email, role, data.password);
  }

  onCreateWithFB() {
    this.authService.CreateUserWithFB();
  }

  onCreateWithGOO() {
    this.authService.CreateUserWithGoogle();
  }

}
