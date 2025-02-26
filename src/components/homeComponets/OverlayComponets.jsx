import "dayjs/locale/pt-br";
import { Button, Modal, Overlay, StartTime, EndTime, TextTime, ListEvents, TextTimeListEvent } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";
import { deleteEvent } from "./DeleteEventsComponets";
import { useEffect, useRef } from "react";
import { closeModal } from "./CloseModalcomponets";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, eventDetails, events, setEventDetails, }) {
    const prevSelectedDayRef = useRef(selectedDay);
    

    function handleSaveEvent() {
        const { text, startTime, endTime } = eventDetails;
        if (!text.trim() || !startTime || !endTime) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, closeModal, setEventDetails);
    }

    const selectedEvents = events[selectedDay] || [];
    selectedEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    useEffect(() => {
        if (prevSelectedDayRef.current !== selectedDay) {
            setEventDetails({
                text: "",
                startTime: "",
                endTime: ""
            });
            prevSelectedDayRef.current = selectedDay;
        }
    }, [selectedDay, setEventDetails]);
    return (
        <Overlay>
            <Modal>
                <TextTimeListEvent>
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
                    <ListEvents>
                        {selectedEvents.map((event, index) => (
                            <div
                                key={index}
                                onClick={() => setEventDetails({
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
                </TextTimeListEvent>
                <div>
                    <Button onClick={handleSaveEvent}>Salvar</Button>
                    <Button onClick={() => closeModal(setIsModalOpen, setSelectedDay, setEventDetails)}>Cancelar</Button>
                    <Button onClick={() => deleteEvent(selectedDay, events, setEvents, closeModal, authToken)}>Excluir</Button>
                </div>
            </Modal>
        </Overlay>
    );
}
