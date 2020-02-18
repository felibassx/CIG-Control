import { Menu } from './menu.model';
export class User {
    public name: string;
    public email: string;
    public birdDate: Date;
    public role: string;
    public uid: string;

    constructor( obj: DataObj ) {
        this.name = obj && obj.name || null;
        this.email =  obj && obj.email || null;
        this.birdDate =  obj && obj.birdDate || null;
        this.role = obj && obj.role || null;
        this.uid = obj && obj.uid || null;
    }
}

interface DataObj {
    uid: string;
    email: string;
    name: string;
    birdDate: Date;
    role: string;
}
