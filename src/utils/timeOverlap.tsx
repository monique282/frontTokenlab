export function isTimeOverlapping(newStart, newEnd, existingEvents) {
    return existingEvents.some(({ startTime, endTime }) => {
        return (
            (newStart >= startTime && newStart < endTime) || // Começa dentro de um evento existente
            (newEnd > startTime && newEnd <= endTime) || // Termina dentro de um evento existente
            (newStart <= startTime && newEnd >= endTime) // Abrange completamente um evento existente
        );
    });
}