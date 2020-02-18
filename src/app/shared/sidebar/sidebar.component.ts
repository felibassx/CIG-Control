import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Menu } from '../../models/menu.model';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

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
    public store: Store<AppState>
  ) { 
    
  }

  ngOnInit() {

    this.subscription = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null) // para controlar que no pasen datos nulos
      )
      .subscribe((auth: any) => {
        this.user = auth.user;
        this.menus = auth.menus;        
        this.userName = auth.user.name;

        console.log(this.menus);
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
