import * as fromAuth from './auth/auth.reducer';
import * as fromShared from './shared/ui.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    ui: fromShared.State;
    auth: fromAuth.AuthState;
    // ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducer: ActionReducerMap<AppState> = {
    ui: fromShared.uiReducer,
    auth: fromAuth.authReducer,
    // ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
};

