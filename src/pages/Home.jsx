import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import { All, CalendarContainer, Day, Grid, } from "../assets/styled/homeStyled";
import { HeaderComponets } from "../components/homeComponets/HeaderComponets";
import { OverlayComponets } from "../components/homeComponets/OverlayComponets";
import { fetchEvents } from "../components/homeComponets/RequestEvents";
import { AuthContext } from "../contexts/contex";

dayjs.locale("pt-br");

export default function Home() {
    const { authToken } = useContext(AuthContext);
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [events, setEvents] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    const [eventText, setEventText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventDetails, setEventDetails] = useState({
        text: "",
        startTime: "",
        endTime: ""
    });

    // Primeiro dia do mês atual.
    const startOfMonth = currentDate.startOf("month");
    // Número total de dias no mês atual.
    const daysInMonth = currentDate.daysInMonth();
    // O dia da semana do primeiro dia do mês (0 = Domingo, 1 = Segunda... 6 = Sábado).
    const firstDayOfWeek = startOfMonth.day();
    // Array de objetos dayjs, representando todos os dias do mês.
    const days = Array.from({ length: daysInMonth }, (_, i) => startOfMonth.add(i, "day"));

    // Abre o modal e carrega evento existente, se houver.
    function openModal(day) {
        const formattedDate = day.format("YYYY-MM-DD"); 
        setSelectedDay(formattedDate);
        setEventText(events[formattedDate]?.text || ""); 
        setIsModalOpen(true);
    };


    useEffect(() => {
        fetchEvents(setEvents, authToken); 
    }, []);

    return (
        <All>
            <CalendarContainer>
                <HeaderComponets setCurrentDate={setCurrentDate} currentDate={currentDate}/>
                <Grid>
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                        <div key={day}>{day}</div>
                    ))}
                </Grid>
                <Grid>
                    {/* Adiciona células vazias no início do grid para alinhar corretamente os dias do mês */}
                    {[...Array(firstDayOfWeek)].map((_, i) => (
                        <div key={i}></div>
                    ))}
                    {days.map(day => (
                        <Day
                            key={day.format("YYYY-MM-DD")}
                            isToday={day.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")}
                            onClick={() => { openModal(day);  }}
                        >
                            {day.date()}
                            {events[day.format("YYYY-MM-DD")] && <span>📌</span>}
                        </Day>
                    ))}
                </Grid>
            </CalendarContainer>

            {isModalOpen && (
                <OverlayComponets authToken={authToken} selectedDay={selectedDay} setSelectedDay={setSelectedDay} setIsModalOpen={setIsModalOpen} setEvents={setEvents} setEventText={setEventText} eventDetails={eventDetails} events={events} setEventDetails = { setEventDetails }/>
            )}
        </All>
    );
}
