import './Canvas.css.css';
import React from 'react';
import CanvasDraw from "react-canvas-draw";

export type CanvasProps = {
}

export const Canvas: React.FC<CanvasProps> = () => {
    return (
        <div className="Canvas">
            <CanvasDraw />
        </div>
    )
};

export default Canvas;