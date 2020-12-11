import React, { useEffect } from 'react';
import { SplashStyled, Row1, Row2, Row3 } from './splash.styles';
import { useLocation } from 'wouter';

const Splash = () => {
    const [, pushLocation ] = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            pushLocation('/onboarding');
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

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

export default Splash;
