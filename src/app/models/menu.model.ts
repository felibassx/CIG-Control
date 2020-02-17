
export class Menu {
    icon: string;
    role: string;
    title: string;
    submenu?: Submenu[];
}

export class Submenu {
    title: string;
    url: string;
}
