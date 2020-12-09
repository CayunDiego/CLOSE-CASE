import React, { useState } from 'react';
import { FooterNavbarStyled, ContainerStyled } from './footer.styles';
import ButtonIcon from '../ButtonIcon'
import { Home, Add, Search } from '../icons';
import {useLocation} from 'wouter';

const itemsbutton = [
    {name: 'Home' ,message: '', url: '/', icon: <Home/>, event: false},
    {name: 'Add' ,message: '', url: '/', icon: <Add/>, event: false},
    {name: 'Portfolio', message: '', url: '', icon: <Search/>, event: true}
]

const Footer = () => {
    const [ path, pushLocation] = useLocation();
    const [checked, setChecked] = useState(path);

    const handleOnClick = button => {
        setChecked(button.url);
        pushLocation(button.url);
    }

    return (
        <FooterNavbarStyled>
            <ContainerStyled>
                {
                    itemsbutton.map( (button, index) => 
                        <ButtonIcon 
                            color='secondary'
                            size='medium'
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