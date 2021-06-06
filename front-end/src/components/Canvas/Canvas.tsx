import './Canvas.css';
import React from 'react';
import CanvasDraw from "react-canvas-draw";

export type CanvasProps = {
}

const Canvas: React.FC<CanvasProps> = () => {
    return (
        <div className="Canvas">
            <CanvasDraw />
        </div>
    )
};

export default Canvas;