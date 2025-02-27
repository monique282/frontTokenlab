import "dayjs/locale/pt-br";
import { ListEvents } from "../../assets/styled/homeStyled";


export function ListEventsComponets({ setEventDetails, selectedEvents }) {
    
    return (
        <ListEvents>
            {selectedEvents.map((event) => (
                <div
                    key={event.id}
                    onClick={() => setEventDetails({
                        id: event.id, 
                        text: event.text,
                        startTime: event.startTime,
                        endTime: event.endTime
                    })}
                    style={{ cursor: "pointer" }}
                >
                    {`${event.startTime} às ${event.endTime} - ${event.text}`}
                </div>
            ))}
        </ListEvents>
                
    );
};
