import React from "react";

import WriteStep from "components/WriteStep/WriteStep";

type GamePageProps = {
}

const GamePage: React.FC<GamePageProps> = () => {
    return (
        <div id="GamePage">
            <WriteStep/>
        </div>
    )
};

export default GamePage;