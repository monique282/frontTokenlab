import { closeModal } from "./CloseModalComponets";
import { deleteEvent } from "./DeleteEventsComponets";

export function handleDeleteEvent(selectedEventId, selectedDay, setEvents, authToken, setIsModalOpen, setSelectedDay, setEventDetails, setSelectedEventId) {
    if (!selectedEventId) {
        alert("Selecione um evento para excluir.");
        return;
    }
    deleteEvent(selectedEventId, selectedDay, setEvents, authToken);
    closeModal(setIsModalOpen, setSelectedDay, setEventDetails);
    setSelectedEventId(null);
}