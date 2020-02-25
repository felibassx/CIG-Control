import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: User;
  // userName: string;
  // userEmail: string;
  // subscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    // public store: Store<AppState>
  ) { }

  ngOnInit() {
     
    this.user =  this.authService.getUser(); // JSON.parse(localStorage.getItem('user'));   

  }

  search( searchText: string ) {}

}
