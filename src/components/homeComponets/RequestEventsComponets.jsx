import axios from "axios";
import dayjs from "dayjs";

export function fetchEvents(setEvents, authToken) {
    
    const urlCode = `${import.meta.env.VITE_API_URL}/events`;

    axios.get(urlCode, {
        headers: { Authorization: `Bearer ${authToken}` }
    })
        .then(response => {
            const data = response.data;

            const eventsObject = data.flat().reduce((acc, eventGroup) => {
                const formattedDate = dayjs(eventGroup.day, "YYYY/MM/DD").format("YYYY-MM-DD");

                if (!acc[formattedDate]) {
                    acc[formattedDate] = [];
                }

                eventGroup.events.forEach(event => {
                    acc[formattedDate].push({
                        id: event.id,
                        text: event.text,
                        startTime: event.startTime,
                        endTime: event.endTime
                    });
                });

                return acc;
            }, {});
            setEvents(eventsObject);
        })
        .catch(error => {
            console.error("Erro ao buscar eventos:", error);
        });
};
