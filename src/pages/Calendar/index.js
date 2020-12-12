import React from 'react';
import { CalendarStyled } from './calendar.styles';
import LayouMain from '../Layout/Layou.main';
import { Title, CardCaseBig } from '../../components';

const Calendar = () => {
    return (
        <LayouMain>
            <CalendarStyled>
                <Title>
                    Calendario
                </Title>
                <CardCaseBig/>
            </CalendarStyled>
        </LayouMain>
    )
}

export default Calendar;
