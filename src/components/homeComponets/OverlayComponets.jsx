import "dayjs/locale/pt-br";
import { Button, Modal, Overlay, StartTime, EndTime, TextTime, TextTimeListEvent } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";
import { deleteEvent } from "./DeleteEventsComponets";
import { useEffect, useRef, useState } from "react";
import { closeModal } from "./CloseModalcomponets";
import { ListEventsComponets } from "./ListEventsComponets";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, eventDetails, events, setEventDetails, }) {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const prevSelectedDayRef = useRef(selectedDay);
    
console.log(events)
    function handleSaveEvent() {
        const { text, startTime, endTime } = eventDetails;
        if (!text.trim() || !startTime || !endTime) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen);
    }

    const selectedEvents = events[selectedDay] || [];
    selectedEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    function handleDeleteEvent() {
       
        if (!selectedEventId) {
            alert("Selecione um evento para excluir.");
            return;
        }
        deleteEvent(selectedEventId, selectedDay, setEvents, authToken); 
        closeModal(setIsModalOpen, setSelectedDay, setEventDetails);
        setSelectedEventId(null); 
    }

    useEffect(() => {
        if (prevSelectedDayRef.current !== selectedDay) {
            setEventDetails({
                text: "",
                startTime: "",
                endTime: ""
            });
            setSelectedEventId(null);
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
                    <ListEventsComponets
                        setEventDetails={(details) => {
                            setEventDetails(details);
                            setSelectedEventId(details.id);
                        }}
                        selectedEvents={events[selectedDay] || []}
                    />
                </TextTimeListEvent>
                <div>
                    <Button onClick={handleSaveEvent}>Salvar</Button>
                    <Button onClick={() => closeModal(setIsModalOpen, setSelectedDay, setEventDetails)}>Cancelar</Button>
                    <Button onClick={handleDeleteEvent} >Excluir</Button>
                </div>
            </Modal>
        </Overlay>
    );
}
