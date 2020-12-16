import React from 'react';
import { CalendarStyled, ListCases } from './calendar.styles';
import LayouMain from '../Layout/Layout.main';
import { 
    Title, 
    CardCaseBig,
    CalendarDataPicker
} from '../../components';
import { useLocation } from 'wouter';

const Calendar = () => {
    const [, pushLocation ] = useLocation();
    
    return (
        <LayouMain>
            <CalendarStyled>
                <Title>Calendario</Title>
                <CalendarDataPicker/>
                <ListCases>
                    <CardCaseBig onClick={()=>pushLocation('/profile/new-case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/new-case')}/>
                    <CardCaseBig onClick={()=>pushLocation('/profile/new-case')}/>
                </ListCases>
            </CalendarStyled>
        </LayouMain>
    )
}

export default Calendar;
