export interface ICollabContent {
    id: string;
    title: string;
    text?: string;
};

export interface ICollabApps {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
};

export interface IProject {
    id: number;
    title: string;
    category: "desarrollo web" | "gestion de contenido" | "servicio ti" | "marketing y diseño gráfico";
    client: string;
    image: string;
    desc: string;
    tags?: {name: string, color: string}[];
    icon: string;
    link?: string;
    modal_img?: string;
};