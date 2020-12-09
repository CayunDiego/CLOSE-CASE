import React from 'react'
import { SplashStyled, Row1, Row2, Row3 } from './splash.styles';

const Splash = () => {
    return (
        <SplashStyled>
            <Row1/>
            <Row2>
                <img src="/assets/logo_firma.png" alt="logo"/>
            </Row2>
            <Row3/>
        </SplashStyled>
    )
}

export default Splash
