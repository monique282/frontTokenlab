import axios from "axios";

export function saveEvent(selectedDay, eventText, authToken, setEvents, setSelectedDay, setEventText, closeModal) {
    if (!selectedDay || !eventText.trim()) return;

    const formattedDate = selectedDay.replace(/-/g, "/");
    const urlCode = `${import.meta.env.VITE_API_URL}/events`;
    const data = {
        text: eventText,
        day: formattedDate
    };
    axios.post(urlCode, data, {
        headers: { Authorization: `Bearer ${authToken}` }
        , data
    })

        .then(() => {
            setEvents(prevEvents => ({
                ...prevEvents,
                [selectedDay]: eventText
            }));
            setSelectedDay(null);
            setEventText("");
            closeModal();
        })
        .catch(error => {
            console.error("Erro ao salvar evento:", error);
        });
}
