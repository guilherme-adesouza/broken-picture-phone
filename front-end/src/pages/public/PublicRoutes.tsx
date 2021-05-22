import {Route} from "react-router-dom";
import LoginPage from "./Login";
import NotFoundPage from "./NotFound";
import {PageRoute, TypeRouter} from "../PageRoutes";

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