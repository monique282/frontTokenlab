import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Button, CalendarContainer, Day, Grid, Header, All } from "../assets/styled/homeStyled";

dayjs.locale("pt-br");

export default function Home () {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const startOfMonth = currentDate.startOf("month");
    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfWeek = startOfMonth.day();

    const days = Array.from({ length: daysInMonth }, (_, i) => startOfMonth.add(i, "day"));

    return (
        <All>
            <CalendarContainer>
                <Header>
                    <Button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>◀</Button>
                    <h2>{currentDate.format("MMMM YYYY")}</h2>
                    <Button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>▶</Button>
                </Header>
                <Grid>
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                        <div key={day}>{day}</div>
                    ))}
                </Grid>
                <Grid>
                    {[...Array(firstDayOfWeek)].map((_, i) => (
                        <div key={i}></div>
                    ))}
                    {days.map(day => (
                        <Day key={day.format("YYYY-MM-DD")} isToday={day.isSame(dayjs(), "day")}>
                            {day.date()}
                        </Day>
                    ))}
                </Grid>
            </CalendarContainer>
        </All>
        
    );
};

