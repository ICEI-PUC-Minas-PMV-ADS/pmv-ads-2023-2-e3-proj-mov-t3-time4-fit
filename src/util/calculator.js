export function getMetaCalorica({dataNascimento, peso, altura, sexo, meta, atividade}) {
    let idade = parseInt(getIdade(dataNascimento));
    let metaPeso = getMetaPeso(peso, meta);
    let metaCalorica = 0;

    if (sexo === 'Masculino') {
        metaCalorica = (66 + (13.7 * metaPeso) + (5 * altura) - (6.8 * idade));
    } else {
        metaCalorica = (655 + (9.6 * metaPeso) + (1.8 * altura) - (4.7 * idade));
    }

    switch (atividade) {
        case 'Leve':
            metaCalorica *= 1.375;
            break;
        case 'Moderado':
            metaCalorica *= 1.55;
            break;
        case 'Intenso':
            metaCalorica *= 1.725;
            break;
        default:
            break;
    }

    return parseInt(metaCalorica.toFixed(0));
}

export function getMetaPeso(peso, meta) {
    let metaPeso = peso;

    switch (meta) {
        case 'Emagrecer':
            metaPeso *= 0.9;
            break;
        case 'Ganhar Peso':
            metaPeso *= 1.1;
            break;
        case 'Manter Peso':
            break;
        default:
            break;
    }

    return parseFloat(metaPeso.toFixed(1));
}

export function getIdade(dataNascimento) {
    let ano = dataNascimento.substring(6, 10);
    return new Date().getFullYear() - ano;
}