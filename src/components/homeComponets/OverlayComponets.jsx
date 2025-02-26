import "dayjs/locale/pt-br";
import { Button, Modal, Overlay } from "../../assets/styled/homeStyled";
import axios from "axios";

export function OverlayComponets({ authToken, selectedDay, setSelectedDay, setIsModalOpen, setEvents, setEventText, eventText }) {

    function saveEvent() {
        if (!selectedDay || !eventText.trim()) return;

        const formattedDate = selectedDay.replace(/-/g, "/"); 
        const urlCode = `${import.meta.env.VITE_API_URL}/events`;
        const data = {
            text: eventText,
            day: formattedDate
        };
        axios.post(urlCode, data ,{
            headers: { Authorization: `Bearer ${authToken}` }
            , data
        })
        
            .then(() => {
                setEvents(prevEvents => ({
                    ...prevEvents,
                    [selectedDay]: eventText
                }));

                closeModal();
            })
            .catch(error => {
                console.error("Erro ao salvar evento:", error);
            });
    }

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
                    <Button onClick={saveEvent}>Salvar</Button>
                    <Button onClick={closeModal}>Cancelar</Button>
                </div>
            </Modal>
        </Overlay>
    )
}