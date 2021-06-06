import "./Banner.css";
import React from "react";

type BannerProps = {
    children?: React.ReactNode
}

type BannerTitleProps = {
    description: string
}

export const BannerTitle: React.FC<BannerTitleProps> = ({description}) => {
    return (
        <h3 className="BannerTitle">{description}</h3>
    )
}

const Banner: React.FC<BannerProps> = ({children}) => {
    return (
        <div className="Banner">
            {children}
        </div>
    )
};

export default Banner;
