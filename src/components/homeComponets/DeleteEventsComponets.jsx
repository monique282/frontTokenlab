import axios from "axios";

export function deleteEvent(selectedDay, events, setEvents, closeModal, authToken ) {
    if (!selectedDay || !events[selectedDay]) return;

    const eventId = events[selectedDay].id;
    const urlCode = `${import.meta.env.VITE_API_URL}/events/${eventId}`;

    axios.delete(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            setEvents(prevEvents => {
                const updatedEvents = { ...prevEvents };
                delete updatedEvents[selectedDay];
                return updatedEvents;
            });
            closeModal();
        })
        .catch(error => {
            console.error("Erro ao excluir o evento:", error);
        });
}