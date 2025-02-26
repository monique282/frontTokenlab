import "dayjs/locale/pt-br";
import { Button, Modal, Overlay } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";
import { deleteEvent } from "./DeleteEventsComponets";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, setEventText, eventText, events }) {


    function closeModal() {
        setIsModalOpen(false);
        setSelectedDay(null);
        setEventText("");
    };

      
    return (
        <Overlay>
            <Modal>
                <h3>Adicionar Evento</h3>
                <textarea
                    type="text"
                    value={eventText}
                    onChange={(e) => setEventText(e.target.value)}
                />
                <div>
                    <Button onClick={() => saveEvent(selectedDay, eventText, authToken, setEvents, setSelectedDay, setEventText, closeModal)}>Salvar</Button>
                    <Button onClick={closeModal}>Cancelar</Button>
                    <Button onClick={() => deleteEvent(selectedDay, events, setEvents, closeModal, authToken)}>Excluir</Button>
                </div>
            </Modal>
        </Overlay>
    )
}