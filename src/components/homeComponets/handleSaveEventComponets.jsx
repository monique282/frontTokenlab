import { isTimeOverlapping } from "../../utils/timeOverlap";
import { saveEvent } from "./SalveEventComponets";

export function handleSaveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen, events) {
    const { text, startTime, endTime } = eventDetails;
    if (!text.trim() || !startTime || !endTime) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const existingEvents = events[selectedDay] || [];

    if (isTimeOverlapping(startTime, endTime, existingEvents)) {
        alert("O horário do evento entra em conflito com outro evento já existente.");
        return;
    }

    saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen);
}
