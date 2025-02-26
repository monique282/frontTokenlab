import "dayjs/locale/pt-br";
import { Button, Modal, Overlay } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";
import { deleteEvent } from "./DeleteEventsComponets";
import { useEffect, useRef } from "react";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, eventDetails, events, setEventDetails, }) {
    const prevSelectedDayRef = useRef(selectedDay);
    function closeModal() {
        setIsModalOpen(false);
        setSelectedDay(null);
        setEventDetails({
            text: "",
            startTime: "",
            endTime: ""
        });
    };

    function handleSaveEvent() {
        const { text, startTime, endTime } = eventDetails;
        if (!text.trim() || !startTime || !endTime) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        saveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, closeModal, setEventDetails);
    }

    const selectedEvent = events[selectedDay] || {};

    useEffect(() => {
        if (prevSelectedDayRef.current !== selectedDay) {
            setEventDetails({
                text: selectedEvent.text || "",
                startTime: selectedEvent.startTime || "",
                endTime: selectedEvent.endTime || ""
            });
            prevSelectedDayRef.current = selectedDay; 
        }
    }, [selectedDay, selectedEvent, setEventDetails]); 

    return (
        <Overlay>
            <Modal>
                <h3>Adicionar Evento</h3>
                <textarea
                    type="text"
                    value={selectedEvent.text} 
                    onChange={(e) => setEventDetails({ ...eventDetails, text: e.target.value })} 
                />
                <div>
                    <label>Hora de Início:</label>
                    <input
                        type="time"
                        value={selectedEvent.startTime} 
                        onChange={(e) => setEventDetails({ ...eventDetails, startTime: e.target.value })}
                    />
                </div>
                <div>
                    <label>Hora de Término:</label>
                    <input
                        type="time"
                        value={selectedEvent.endTime}
                        onChange={(e) => setEventDetails({ ...eventDetails, endTime: e.target.value })} 
                    />
                </div>
                <div>
                    <Button onClick={handleSaveEvent}>Salvar</Button>
                    <Button onClick={closeModal}>Cancelar</Button>
                    <Button onClick={() => deleteEvent(selectedDay, events, setEvents, closeModal, authToken)}>Excluir</Button>
                </div>
            </Modal>
        </Overlay>
    )
}