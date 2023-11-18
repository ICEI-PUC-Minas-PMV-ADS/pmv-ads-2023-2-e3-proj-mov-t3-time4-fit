export function getFormattedDate(date) {
    const dateAux = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return dateAux.toISOString().slice(0, 10);
}

export function getFormattedDayMonth(day) {
    let dateAux = new Date(day);
    let date = new Date(dateAux.getTime() + dateAux.getTimezoneOffset() * 60000);

    return date.toLocaleDateString('pt-BR', {day: 'numeric', month: 'short'})
        .replace(' de ', '/').replace('.', '');
}

export function getFormattedDatePretty(day) {
    let today = new Date();
    let dateAux = new Date(day);
    let date = new Date(dateAux.getTime() + dateAux.getTimezoneOffset() * 60000);

    if (date.toDateString() === today.toDateString()) {
        return 'Hoje';
    }

    const diaMes = date.toLocaleDateString('pt-BR', {day: 'numeric', month: 'short'})
        .replace(' de ', '/').replace('.', '');
    const diaSemana = date.toLocaleDateString('pt-BR', {weekday: 'short'})
        .slice(0, 3).replace('.', '');
    return `${diaSemana}, ${diaMes}`;

}

export function getFormattedDateShort(dataNascimento) {
    let partesData = dataNascimento.split('-');
    return partesData[2] + '/' + partesData[1] + '/' + partesData[0];
}