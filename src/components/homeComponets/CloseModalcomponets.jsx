export function closeModal(setIsModalOpen, setSelectedDay, setEventDetails) {
    setIsModalOpen(false);
    setSelectedDay(null);
    setEventDetails({
        text: "",
        startTime: "",
        endTime: ""
    });
};