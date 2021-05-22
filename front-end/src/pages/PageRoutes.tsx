import PrivateRoutes from 'pages/private/PrivateRoutes';
import PublicRoutes from 'pages/public/PublicRoutes';
import {ComponentType} from "react";

export interface PageRoute {
    path?: string,
    component: ComponentType,
}

export interface TypeRouter {
    component: ComponentType,
    routes: PageRoute[],
}

const pageRoutes: TypeRouter[] = [
    PrivateRoutes,
    PublicRoutes
]

export default pageRoutes;