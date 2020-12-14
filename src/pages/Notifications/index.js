import React from 'react';
import { NotificationsStyled,
         ListCases
        } from './notifications.styles';
import LayouMain from '../Layout/Layout.main';
import { Title,
        CardHitory
    } from '../../components';
 
const Notifications = () => {
    return (
        <LayouMain>
            <NotificationsStyled>
                <Title>
                    Notificaciones
                </Title>
                <ListCases>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                    <CardHitory/>
                </ListCases>
            </NotificationsStyled>
        </LayouMain>
    )
}

export default Notifications;
