import {Route} from "react-router-dom";
import {PageRoute, TypeRouter} from "../PageRoutes";

import LoginPage from "./Login/Login";
import NotFoundPage from "./NotFound/NotFound";

const routes: PageRoute[] = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        component: NotFoundPage,
    }
];

const publicRoute: TypeRouter = {
    component: Route,
    routes
}

export default publicRoute;