import "dayjs/locale/pt-br";
import { useEffect, useRef, useState } from "react";
import { Button, Modal, Overlay, TextTimeListEvent } from "../../assets/styled/homeStyled";
import { closeModal } from "./CloseModalComponets";
import { handleSaveEvent } from "./HandleSaveEventComponets";
import { ListEventsComponets } from "./ListEventsComponets";
import { handleUpdateEvent } from "./HandleUpdateEventComponets";
import { TextTimeComponets } from "./TextTimeComponets";
import { handleDeleteEvent } from "./HandleDeleteEventComponets";
import { AlertModal } from "../../utils/alertModal";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, eventDetails, events, setEventDetails }) {

    const [selectedEventId, setSelectedEventId] = useState(null);
    const prevSelectedDayRef = useRef(selectedDay);
    const [alertMessage, setAlertMessage] = useState(""); 

    const selectedEvents = events[selectedDay] || [];
    selectedEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

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
                    <TextTimeComponets eventDetails={eventDetails} setEventDetails={setEventDetails} />
                    <ListEventsComponets
                        setEventDetails={(details) => {
                            setEventDetails(details);
                            setSelectedEventId(details.id);
                        }}
                        selectedEvents={events[selectedDay] || []}
                    />
                </TextTimeListEvent>
                <div>
                    <Button onClick={() => handleSaveEvent(selectedDay, eventDetails, authToken, setEvents, setSelectedDay, setEventDetails, setIsModalOpen, events, setAlertMessage)}>Salvar</Button>
                    <Button onClick={() => handleUpdateEvent(selectedEventId, setEvents, authToken, eventDetails, setEventDetails, events, selectedDay, setSelectedDay, setSelectedEventId, setIsModalOpen, setAlertMessage)}>Atualizar</Button>
                    <Button onClick={() => handleDeleteEvent(selectedEventId, selectedDay, setEvents, authToken, setIsModalOpen, setSelectedDay, setEventDetails, setSelectedEventId, setAlertMessage)} >Excluir</Button>
                    <Button onClick={() => closeModal(setIsModalOpen, setSelectedDay, setEventDetails)}>Cancelar</Button>
                </div>
            </Modal>
            {alertMessage && <AlertModal message={alertMessage} onClose={() => setAlertMessage("")} />}
        </Overlay>
    );
};
