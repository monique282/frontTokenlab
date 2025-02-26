import { EndTime, StartTime, TextTime } from "../../assets/styled/homeStyled";


export function TextTimeComponets({eventDetails, setEventDetails}) {

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
                    onChange={(e) => setEventDetails({ ...eventDetails, startTime: e.target.value })}
                />
            </StartTime>
            <EndTime>
                <label>Hora de Término:</label>
                <input
                    type="time"
                    value={eventDetails.endTime}
                    onChange={(e) => setEventDetails({ ...eventDetails, endTime: e.target.value })}
                />
            </EndTime>
        </TextTime>

    );
}
