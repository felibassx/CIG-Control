
export class Menu {
    icon: string;
    role: string;
    title: string;
    submenu: Submenu[];

    constructor( obj: DataObj ) {
        this.icon = obj && obj.icon || null;
        this.role =  obj && obj.role || null;
        this.title =  obj && obj.title || null;
        this.submenu = obj && obj.submenu || null;
    }
}

interface DataObj {
    icon: string;
    role: string;
    title: string;
    submenu: Submenu[];
}

export class Submenu {
    title: string;
    url: string;
}
