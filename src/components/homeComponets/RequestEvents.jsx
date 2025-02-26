import axios from "axios";
import dayjs from "dayjs";

export function fetchEvents(setEvents, authToken) {
    const urlCode = `${import.meta.env.VITE_API_URL}/events`;

    axios.get(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(response => {
            const data = response.data;
            const eventsObject = data.reduce((acc, event) => {
                const formattedDate = dayjs(event.day, "DD/MM/YYYY").format("YYYY-MM-DD");
                acc[formattedDate] = { id: event.id, text: event.text, startTime: event.startTime, endTime: event.endTime };
                return acc;
            }, {});
            setEvents(eventsObject);
        })
        .catch(error => {
            console.error("Erro ao buscar eventos:", error);
        });
}

