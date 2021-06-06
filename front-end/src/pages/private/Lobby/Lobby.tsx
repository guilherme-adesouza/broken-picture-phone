import React from "react";
import {useHistory} from "react-router-dom";

import Button from "components/Button/Button";
import Banner, {BannerTitle} from "components/Banner/Banner";
import PlayerList from "components/PlayerList/PlayerList";

type LobbyProps = {
}

const LobbyPage: React.FC<LobbyProps> = () => {
    let history = useHistory();


    const copyRoomCode = () => {
        alert("Código da sala copiado");
    }

    const startGame = () => {
        history.push("/game");
    }

    return (
        <div id="LobbyPage" className="SplitPage">
            <Banner>
                <BannerTitle description="Jogadores"/>
                <PlayerList players={[{name: 'Teste'}, {name: 'Teste2'}]} />
                <Button onClick={copyRoomCode} description="CONVIDAR"/>
            </Banner>
            <Banner>
                <BannerTitle description="Configurações da sala"/>
                <Button onClick={startGame} description="INCIAR JOGO"/>
            </Banner>
        </div>
    )
};

export default LobbyPage;