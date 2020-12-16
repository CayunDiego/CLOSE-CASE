import React from 'react';
import { ButtonSidebarStyled,IconStyled } from './buttonSidebar.styles';

const ButtonSidebar = ({children, onClick, icon}) => {

    return (
        <ButtonSidebarStyled onClick={onClick}>
                <IconStyled>
                    {icon}
                </IconStyled>
                <p>{children}</p>
        </ButtonSidebarStyled>
    )
}

export default ButtonSidebar;
