import axios from "axios";
import { fetchEvents } from "./RequestEventsComponets";

export function updateEvent(eventId, setEvents, authToken, eventDetails, setEventDetails) {
    
    if (!eventId) return;

    const urlCode = `${import.meta.env.VITE_API_URL}/events/${eventId}`;
    const data = {
        text: eventDetails.text,
        startTime: eventDetails.startTime,
        endTime: eventDetails.endTime
        };
    axios.put(urlCode, data,{
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(() => {
            fetchEvents(setEvents, authToken)
            setEventDetails({
                text: "",
                startTime: "",
                endTime: ""
            });
        })
        .catch(error => {
            console.error("Erro ao atualizar o evento:", error);
        });
};
