import React, { useState, useEffect } from 'react';
import {
        LayoutAuthStyled,
        ContainerMainStyled,
        HeaderStyled,
        ContaineHeaderStyled,
        FooterStyled
    } from './layout.styles';
import { useLocation } from 'wouter';
import { ButtonIcon } from '../../components';
import { ArrowBack } from '../../components/icons';

const LayoutAuth = ({children}) => {
    const [ login, setLogin ] = useState(true);
    const [ path, pushLocation ] = useLocation();

    useEffect(() => {
        if( path.includes('/login') ){
            setLogin(false);
        } else {
            setLogin(true);
        }
    }, [path])

    return (
        <LayoutAuthStyled>
             <HeaderStyled>
                <ContaineHeaderStyled>
                        <p>LOGOOOOO</p>
                </ContaineHeaderStyled>
            </HeaderStyled>
            <ContainerMainStyled>
                {children}
            </ContainerMainStyled>
            {
                login &&  <FooterStyled>
                                <ButtonIcon
                                    onClick={()=> pushLocation('/auth/login')}
                                >
                                    <ArrowBack/>
                                </ButtonIcon>
                           </FooterStyled>
            }
        </LayoutAuthStyled>
    )
}

export default LayoutAuth;
