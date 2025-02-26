import axios from "axios";

export function saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventText, closeModal, setEventDetails) {
    if (!selectedDay || !eventDetails.text.trim()) return;

    const formattedDate = selectedDay.replace(/-/g, "/");
    const urlCode = `${import.meta.env.VITE_API_URL}/events`;
    const data = {
        text: eventDetails.text,
        day: formattedDate,
        startTime: eventDetails.startTime, 
        endTime: eventDetails.endTime 
    };

    axios.post(urlCode, data, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            setEvents(prevEvents => ({
                ...prevEvents,
                [selectedDay]: {
                    text: eventDetails.text,
                    startTime: eventDetails.startTime,
                    endTime: eventDetails.endTime
                }
            }));

            setSelectedDay(null);
            setEventDetails({
                text: "",
                startTime: "",
                endTime: ""
            });            
            closeModal();
        })
        .catch(error => {
            console.error("Erro ao salvar evento:", error);
        });
}
