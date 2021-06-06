import React from "react";

type PlayerListProps = {
    players: PlayerProps[]
}

type PlayerProps = {
    name: string
}

const Player: React.FC<PlayerProps> = ({name}) => {
    return (
        <div>{name}</div>
    )
}

const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    return (
        <div className="PlayerList">
            {players.map((player, idx) => <Player key={idx} {...player}/>)}
        </div>
    )
};

export default PlayerList;
