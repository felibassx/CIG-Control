import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Menu } from './models/menu.model';
import { ROLES } from './utils/const.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'CIG - Control de Ingresos y Gastos';

  constructor( public authService: AuthService ) {}

  ngOnInit() {
    this.authService.initAuthListener();
    this.authService.getMenu();
  }

   


}
