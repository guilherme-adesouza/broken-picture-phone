import {Route} from "react-router-dom";
import {PageRoute, TypeRouter} from "pages/PageRoutes";

import LobbyPage from "pages/private/Lobby/Lobby";
import GamePage from "pages/private/Game/Game";

const routes: PageRoute[] = [
    {
        path: '/lobby',
        component: LobbyPage,
    },
    {
        path: '/game',
        component: GamePage,
    },
];

const privateRouter: TypeRouter = {
    component: Route,
    routes
}

export default privateRouter;