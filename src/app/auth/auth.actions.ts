import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Menu } from '../models/menu.model';

export const SET_USER = '[Auth] Set User';
export const UNSET_USER = '[Auth] Unset User';
// export const SET_MENU = '[Auth] Set Menu';
// export const UNSET_MENU = '[Auth] Unset Menu';

export class SetUserAction implements Action {
    readonly type = SET_USER;
    constructor( public user: User, public menus: Menu[]) {}
}

export class UnsetUserAction implements Action {
    readonly type = UNSET_USER;
}

// export class SetMenuAction implements Action {
//     readonly type = SET_MENU;

//     constructor( public menus: Menu[]) {}
// }

// export class UnsetMenuAction implements Action {
//     readonly type = UNSET_MENU;
// }

export type actions = SetUserAction | UnsetUserAction;

