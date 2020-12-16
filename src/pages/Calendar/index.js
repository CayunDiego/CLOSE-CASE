import React from 'react';
import { CalendarStyled, ListCases } from './calendar.styles';
import LayouMain from '../Layout/Layout.main';
import { 
    Title, 
    CardCaseBig, 
    CalendarDataPicker
} from '../../components';

const Calendar = () => {
    return (
        <LayouMain>
            <CalendarStyled>
                <Title>
                    Calendario
                </Title>
                <CalendarDataPicker/>
                <ListCases>
                    <CardCaseBig url="/profile/case"/>
                    <CardCaseBig url="/profile/case"/>
                    <CardCaseBig url="/profile/case"/>
                </ListCases>
            </CalendarStyled>
        </LayouMain>
    )
}

export default Calendar;
