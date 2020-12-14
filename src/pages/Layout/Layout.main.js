import React, { useState, useEffect, useContext } from 'react';
import {
        LayoutMainStyled,
        ContainerMainStyled
    } from './layout.styles';
import { Header, Footer, PopupSearch } from '../../components';
import { useLocation } from 'wouter';
import searchContext from '../../context/searchContext';

const LayoutMain = ({children}) => {
    const [ home, setHome ] = useState(true);
    const [ path ] = useLocation();
    const { search } = useContext(searchContext);

    useEffect(() => {
        if( path.includes('/home') ){
            setHome(false);
        } else {
            setHome(true);
        }
    }, [path]);

    return (
        <LayoutMainStyled color={!home}>
            {
                search && <PopupSearch/>
            }
            <Header/>
            <ContainerMainStyled>
                {children}
            </ContainerMainStyled>
            {
                home &&  <Footer/>
            }
        </LayoutMainStyled>
    );
}

export default LayoutMain;
