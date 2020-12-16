import React, { useState } from 'react';
import {
    StyledNavbarContainer,
    StyledUl,
    TheLink
} from './navbar.styles';

const Navbar = () => {
    const [keyActive, setKeyActive] = useState('Información');

    const navItems = [
        {name: 'Información', to: '/profile/user'},
        {name: 'Casos', to: '/profile/user'},
        {name: 'Plan', to: '/profile/user'}
    ]

    return (
        <StyledNavbarContainer>
            <StyledUl>
            {
                navItems.map(item => (
                <TheLink
                    to={item.to}
                    key={item}
                    active={keyActive === item.name ? true : false}
                    onClick={() => keyActive === item.name ? setKeyActive(null) : setKeyActive(item.name)}
                >
                    {item.name}
                </TheLink>
                ))
            }
            </StyledUl>
        </StyledNavbarContainer>
    );
}

export default Navbar;
