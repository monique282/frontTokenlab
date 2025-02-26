import "dayjs/locale/pt-br";
import { Button, Modal, Overlay } from "../../assets/styled/homeStyled";
import { saveEvent } from "./SalveEventComponets";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, setEventText, eventText }) {

    
    function closeModal() {
        setIsModalOpen(false);
        setSelectedDay(null);
        setEventText("");
    };

    function deleteEvent(){

    }

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
                    <Button onClick={deleteEvent}>Excluir</Button>
                </div>
            </Modal>
        </Overlay>
    )
}