import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Menu } from '../../models/menu.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  user: User;
  userName: string;
  menus: Array<Menu> = [];
  subscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    public store: Store<AppState>,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.menus = JSON.parse(localStorage.getItem('menus'));   
    this.user = JSON.parse(localStorage.getItem('user'));   

    // this.spinner.show();
    // this.subscription = this.store.select('auth')
    //   .pipe(
    //     filter(auth => auth.user != null) // para controlar que no pasen datos nulos
    //   )
    //   .subscribe((auth: any) => {
    //     this.user = auth.user;             
    //     this.userName = auth.user.name;
    //     this.spinner.hide();                                             
    //   });
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
