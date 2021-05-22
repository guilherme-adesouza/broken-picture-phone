import {Route} from "react-router-dom";
import {PageRoute, TypeRouter} from "pages/PageRoutes";

const routes: PageRoute[] = [];

const privateRouter: TypeRouter = {
    component: Route,
    routes
}

export default privateRouter;