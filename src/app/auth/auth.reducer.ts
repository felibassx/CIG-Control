import * as fromAuth from './auth.actions';
import { User } from '../models/user.model';
import { Menu } from '../models/menu.model';

export interface AuthState {
    user: User;
    menus: Menu[];
}

const initState: AuthState = {
    user: null,
    menus: []
};

export function authReducer( state = initState, action: fromAuth.actions ) {

    switch (action.type) {
        case fromAuth.SET_USER:
            return {
                user: {
                    ... action.user
                },
                menus: [
                    ...action.menus.map(item => {
                        return {
                            ...item
                        };
                    })
                ]
            };
        
        case fromAuth.UNSET_USER:
            return {
                user: null,
                menus: []
            };
        
        
    
        default:
            return state;
    }

}
