import React from 'react';
import {
    NotificationsStyled,
    ListCases
} from './notifications.styles';
import LayouMain from '../Layout/Layout.main';
import {
    Title,
    CardHistory
} from '../../components';

const Notifications = () => {
    return (
        <LayouMain>
            <NotificationsStyled>
                <Title>
                    Notificaciones
                </Title>
                <ListCases>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                </ListCases>
            </NotificationsStyled>
        </LayouMain>
    )
}

export default Notifications;
