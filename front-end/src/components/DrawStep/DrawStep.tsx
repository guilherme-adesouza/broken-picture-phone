import React from "react";
import Canvas from "components/Canvas/Canvas";

type DrawStepProps = {
}

const DrawStep: React.FC<DrawStepProps> = () => {
    return (
        <div id="DrawStep">
            <Canvas />
        </div>
    )
};

export default DrawStep;