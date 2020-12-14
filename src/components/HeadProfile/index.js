import React from 'react';
import { useLocation } from 'wouter';
import {
    HeadProfileContainer,
    Background,
    TopContainer,
    StyledH1,
    BottomContainer
} from './headProfile.styles';
import { Avatar, Button } from '../index';

const HeadProfile = (props) => {
    const [ path ] = useLocation();
    const { date, status, buttonTitle, userName, description } = props;
    const button = <Button children={buttonTitle} color="third" size="extraSmall"/>

    return (
        <HeadProfileContainer>
            <Background>
                <StyledH1>{userName}</StyledH1>
                <TopContainer>
                    <p>{description}</p>
                    <p>{date}</p>
                </TopContainer>
                <BottomContainer>
                    <p>{status}</p>
                    {path.includes('/profile/case') ? button : ''}
                </BottomContainer>
            </Background>
            <Avatar size="large" margin="-12% 0 0 38%"/>
        </HeadProfileContainer>
    );
}

export default HeadProfile;
