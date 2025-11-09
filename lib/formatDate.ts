/**
 * Zwraca sformatowana date (w postaci string)
 * @param date
 */
export const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
};