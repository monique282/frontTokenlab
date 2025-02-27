import { isTimeOverlapping } from "../../utils/timeOverlap";
import { closeModal } from "./CloseModalComponets";
import { updateEvent } from "./UpdateEventComponets";

export function handleUpdateEvent(selectedEventId, setEvents, authToken, eventDetails, setEventDetails, events, selectedDay, setSelectedDay, setSelectedEventId, setIsModalOpen, setAlertMessage) {
    
    if (!selectedEventId) {
        return;
    };
       setAlertMessage("Selecione um evento para atualizar.");
 
    const { text, startTime, endTime } = eventDetails;
    if (!text.trim() || !startTime || !endTime) {
        alert("Por favor, preencha todos os campos.");
        return;
    };

    const existingEvents = events[selectedDay] || [];
    const filteredEvents = existingEvents.filter(event => event.id !== selectedEventId);

    if (isTimeOverlapping(startTime, endTime, filteredEvents)) {
        setAlertMessage("O horário do evento entra em conflito com outro evento já existente.");
        return;
    };

    updateEvent(selectedEventId, setEvents, authToken, eventDetails, setEventDetails);
    closeModal(setIsModalOpen, setSelectedDay, setEventDetails);
    setSelectedEventId(null);
};