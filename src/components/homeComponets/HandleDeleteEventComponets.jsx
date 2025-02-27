import { deleteEvent } from "./DeleteEventsComponets";

export function handleDeleteEvent(selectedEventId, selectedDay, setEvents, authToken, setIsModalOpen, setSelectedDay, setEventDetails, setSelectedEventId, setAlertMessage, setConfirmAction) {
    
    if (!selectedEventId) {
        setAlertMessage("Selecione um evento para excluir.");
        return;
    };

    deleteEvent(selectedEventId, selectedDay, setEvents, authToken, setConfirmAction, setIsModalOpen, setSelectedDay, setEventDetails, setAlertMessage);
    
    setSelectedEventId(null);
};