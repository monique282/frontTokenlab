import { EndTime, StartTime, TextTime } from "../../assets/styled/homeStyled";

export function TextTimeComponets({ eventDetails, setEventDetails, setAlertMessage }) {

    const handleTimeChange = (field, value) => {
        let newEventDetails = { ...eventDetails, [field]: value };

        if (newEventDetails.startTime && newEventDetails.endTime) {
            if (newEventDetails.startTime > newEventDetails.endTime) {
                setAlertMessage("O horário de início não pode ser maior que o horário de término!");
                return;
            };
        };

        setEventDetails(newEventDetails);
    };

    return (
        <TextTime>
            <h3>Adicionar Evento</h3>
            <textarea
                type="text"
                value={eventDetails.text}
                onChange={(e) => setEventDetails({ ...eventDetails, text: e.target.value })}
            />
            <StartTime>
                <label>Hora de Início:</label>
                <input
                    type="time"
                    value={eventDetails.startTime}
                    onChange={(e) => handleTimeChange("startTime", e.target.value)}
                />
            </StartTime>
            <EndTime>
                <label>Hora de Término:</label>
                <input
                    type="time"
                    value={eventDetails.endTime}
                    onChange={(e) => handleTimeChange("endTime", e.target.value)}
                />
            </EndTime>
        </TextTime>
    );
};
