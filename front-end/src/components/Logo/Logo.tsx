import './Logo.css';
import logo from './bpp-logo.png';
import React from 'react';

export type LogoProps = {
    width: string
}

const Logo: React.FC<LogoProps> = ({width}) => {
    return (
        <img style={{width}} src={logo} alt="Broken Picture Phone Logo"/>
    )
};

export default Logo;