import axios from "axios";
import { closeModal } from "./CloseModalComponets";

export function deleteEvent(eventId, selectedDay, setEvents, authToken, setConfirmAction, setIsModalOpen, setSelectedDay, setEventDetails, setAlertMessage) {
    
    if (!eventId) return;

    const urlCode = `${import.meta.env.VITE_API_URL}/events/${eventId}`;

    axios.delete(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            setEvents(prevEvents => {
                const updatedEvents = { ...prevEvents };
                updatedEvents[selectedDay] = updatedEvents[selectedDay].filter(event => event.id !== eventId);
                return updatedEvents;
            });
            setAlertMessage("Evento excluido com sucesso");
            setConfirmAction(() => () => closeModal(setIsModalOpen, setSelectedDay, setEventDetails));
        })
        .catch(error => {
            console.error("Erro ao excluir o evento:", error);
        });
};
