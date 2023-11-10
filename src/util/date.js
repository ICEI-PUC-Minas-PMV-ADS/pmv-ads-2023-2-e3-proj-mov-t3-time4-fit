export function getFormattedDate(date) {
    return date.toISOString().slice(0, 10);
}

export function getFormattedDatePretty(day) {
    const today = new Date();
    const dateAux = new Date(day);
    const date = new Date(dateAux.getTime() + dateAux.getTimezoneOffset() * 60000);

    if (date.toDateString() === today.toDateString()) {
        return 'Hoje';
    }

    const diaMes = date.toLocaleDateString('pt-BR', {day: 'numeric', month: 'short'})
        .replace(' de ', '/').replace('.', '');
    const diaSemana = date.toLocaleDateString('pt-BR', {weekday:'short'})
        .slice(0, 3).replace('.', '');
    return `${diaSemana}, ${diaMes}`;
}