import {GlobalStyles} from "./styles";

export const UserChoices = {
    objective: [
        {
            value: 'Emagrecer',
            description: 'Perder peso de uma forma saudável',
            icon: 'scale-bathroom',
            color: 'blue',
        },
        {
            value: 'Ganhar Peso',
            description: 'Aumentar massa muscular',
            icon: 'weight-lifter',
            color: 'black',
        },
        {
            value: 'Manter Peso',
            description: 'Manter peso com saúde',
            icon: 'food-apple',
            color: 'red',
        }
    ],
    levelActivity: [
        {
            value: 'Leve',
            description: 'Trabalho em pé ou caminhadas leves',
            icon: 'frown',
            color: GlobalStyles.colors.primary,
        },
        {
            value: 'Moderado',
            description: 'Trabalho pesado e/ou \natividades físicas regulares',
            icon: 'meh',
            color: GlobalStyles.colors.primary,
        },
        {
            value: 'Intenso',
            description: 'Atividades físicas intensas todos os dias',
            icon: 'smile',
            color: GlobalStyles.colors.primary,
        }
    ],
    gender: [
        {
            value: 'Masculino',
            icon: 'man',
            color: GlobalStyles.colors.text800,
        },
        {
            value: 'Feminino',
            icon: 'woman',
            color: GlobalStyles.colors.text800,
        }
    ],
}