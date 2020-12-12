import React, { useState, useEffect } from 'react';
import {
        LayoutMainStyled,
        ContainerMainStyled
    } from './layout.styles';
import { Header, Footer } from '../../components';
import { useLocation } from 'wouter';

const LayouMain = ({children}) => {
    const [ home, setHome ] = useState(true);
    const [ path ] = useLocation();

    useEffect(() => {
        if( path.includes('/home') ){
            setHome(false);
        } else {
            setHome(true);
        }
    }, [path])

    return (
        <LayoutMainStyled color={!home}>
            <Header/>
            <ContainerMainStyled>
                {children}
            </ContainerMainStyled>
            {
                home &&  <Footer/>
            }
        </LayoutMainStyled>
    )
}

export default LayouMain;
