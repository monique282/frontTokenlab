import "dayjs/locale/pt-br";
import { Button, Modal, Overlay, StartTime, EndTime, TextTime, TextTimeListEvent } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";
import { deleteEvent } from "./DeleteEventsComponets";
import { useEffect, useRef, useState } from "react";
import { closeModal } from "./CloseModalcomponets";
import { ListEventsComponets } from "./ListEventsComponets";
import { updateEvent } from "./UpdateEventComponets";
import { isTimeOverlapping } from "../../utils/timeOverlap";
import { handleSaveEvent } from "./handleSaveEventComponets";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, eventDetails, events, setEventDetails, }) {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const prevSelectedDayRef = useRef(selectedDay);

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

    function handleUpdateEvent() {
        if (!selectedEventId) {
            alert("Selecione um evento para atualizar.");
            return;
        }

        const { text, startTime, endTime } = eventDetails;
        if (!text.trim() || !startTime || !endTime) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const existingEvents = events[selectedDay] || [];

        if (isTimeOverlapping(startTime, endTime, existingEvents)) {
            alert("O horário do evento entra em conflito com outro evento já existente.");
            return;
        }

        updateEvent(selectedEventId, setEvents, authToken, eventDetails, setEventDetails);
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
                    <Button onClick={() => handleSaveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen, events)}>Salvar</Button>
                    <Button onClick={handleUpdateEvent}>Atualizar</Button>
                    <Button onClick={handleDeleteEvent} >Excluir</Button>
                    <Button onClick={() => closeModal(setIsModalOpen, setSelectedDay, setEventDetails)}>Cancelar</Button>
                </div>
            </Modal>
        </Overlay>
    );
}
