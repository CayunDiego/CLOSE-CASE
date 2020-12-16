import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./calendarDataPicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { CalendarStyled } from './calendarDataPicker.styles';

const CalendarDataPicker = () => {
    const defaultValue = {
        year: 2019,
        month: 3,
        day: 1,
      };
    const [selectedDay, setSelectedDay] = useState(defaultValue);

    return (
        <CalendarStyled>
            <Calendar
                colorPrimary='#C0C0C0'
                calendarClassName='calendarCustom'
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
                customDaysClassName={[
                // here we add some CSS classes
                { year: 2019, month: 3, day: 4, className: 'navyBlueDay' },
                { year: 2019, month: 3, day: 12, className: 'navyBlueDay' },
                { year: 2019, month: 3, day: 18, className: 'navyBlueDay' },
                { year: 2019, month: 3, day: 26, className: 'navyBlueDay' },
                ]}
            />
        </CalendarStyled>
        
    )
}

export default CalendarDataPicker;
