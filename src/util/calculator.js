export function getMetaCalorica({dataNascimento, peso, altura, sexo, meta, atividade}) {
    let idade = parseInt(getIdade(dataNascimento));
    let metaPeso = parseFloat(getMetaPeso(peso, meta));
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
    switch (meta) {
        case 'Emagrecer':
            return peso*0.9;
        case 'Ganhar Peso':
            return peso*1.1;
        case 'Manter Peso':
            return peso;
        default:
            return peso;
    }
}

export function getIdade(dataNascimento) {
    let ano = dataNascimento.substring(6, 10);
    return new Date().getFullYear() - ano;
}