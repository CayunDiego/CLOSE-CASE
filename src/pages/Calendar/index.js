import React from 'react';
import { CalendarStyled } from './calendar.styles';
import LayouMain from '../Layout/Layout.main';
import { Title, CardCaseBig, CardHitory } from '../../components';

const Calendar = () => {
    return (
        <LayouMain>
            <CalendarStyled>
                <Title>
                    Calendario
                </Title>
                <CardCaseBig/>
                <CardHitory/>
            </CalendarStyled>
        </LayouMain>
    )
}

export default Calendar;
