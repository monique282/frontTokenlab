import axios from "axios";
import { closeModal } from "./CloseModalComponets";
import { fetchEvents } from "./RequestEventsComponets";

export function saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen) {
    
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
            fetchEvents(setEvents, authToken)
            setSelectedDay(null);
            setEventDetails({
                text: "",
                startTime: "",
                endTime: ""
            });            
            closeModal(setIsModalOpen, setSelectedDay, setEventDetails);
        })
        .catch(error => {
            console.error("Erro ao salvar evento:", error);
        });
};
