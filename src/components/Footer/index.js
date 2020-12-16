import React, { useState, useContext } from 'react';
import { FooterNavbarStyled, ContainerStyled } from './footer.styles';
import ButtonIcon from '../ButtonIcon'
import { Home, Add, Search } from '../icons';
import {useLocation} from 'wouter';
import searchContext from '../../context/searchContext';

const itemsbutton = [
    {name: 'Home' ,message: '', url: '/home', icon: <Home/>, event: false},
    {name: 'Add' ,message: '', url: '/addCase', icon: <Add/>, event: false},
    {name: 'Search', message: '', url: '', icon: <Search/>, event: true}
]

const Footer = () => {
    const [ path, pushLocation] = useLocation();
    const { search, setSearch } = useContext(searchContext);

    const handleOnClick = button => {
        pushLocation(button.url);
        if(button.event){
            setSearch(true);
        }
    }

    return (
        <FooterNavbarStyled>
            <ContainerStyled>
                {
                    itemsbutton.map( (button, index) => 
                        <ButtonIcon 
                            color='secondary'
                            size='small'
                            key={index}
                            onClick={() => handleOnClick(button)}
                        >
                            {button.icon}
                        </ButtonIcon>
                    )
                }
            </ContainerStyled>
        </FooterNavbarStyled>
    )
}

export default Footer; 