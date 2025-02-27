import axios from "axios";

export function deleteEvent(eventId, selectedDay, setEvents, authToken) {
    
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
        })
        .catch(error => {
            console.error("Erro ao excluir o evento:", error);
        });
};
