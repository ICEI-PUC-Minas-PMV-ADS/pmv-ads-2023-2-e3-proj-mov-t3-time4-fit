import {createContext, useReducer} from "react";

const DUMMY_REFEICOES = [
    {
        "id": 1,
        "idUsuario": 1,
        "nome": "Café da Manhã",
        "horario": "08:00"
    },
    {
        "id": 2,
        "idUsuario": 1,
        "nome": "Lanche da Manhã",
        "horario": "11:00"
    },
    {
        "id": 3,
        "idUsuario": 1,
        "nome": "Almoço",
        "horario": "13:00"
    },
    {
        "id": 4,
        "idUsuario": 1,
        "nome": "Lanche da tarde",
        "horario": "16:00"
    },
    {
        "id": 5,
        "idUsuario": 1,
        "nome": "Jantar",
        "horario": "19:00"
    },
    {
        "id": 6,
        "idUsuario": 1,
        "nome": "Lanche da noite",
        "horario": "21:00"
    }
]

export const RefeicaoContext = createContext({
    refeicoes: [],
    setRefeicoes: (refeicoes) => {},
    addRefeicao: ({id, idUsuario, nome, horario}) => {},
    removeRefeicao: (id) => {},
    updateRefeicao: (id, {idUsuario, nome, horario}) => {},
});

function refeicaoReducer(state, action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(refeicao => refeicao.id !== action.payload);
        case 'UPDATE':
            const updatableRefeicaoIndex = state.findIndex(refeicao => refeicao.id === action.payload.id);
            const updatedItem = {...state[updatableRefeicaoIndex], ...action.payload.data};
            const updatedRefeicoes = [...state];
            updatedRefeicoes[updatableRefeicaoIndex] = updatedItem;
            return updatedRefeicoes;
        default:
            return state;
    }
}

function RefeicaoContextProvider({children}) {
    const [refeicaoState, dispatch] = useReducer(refeicaoReducer, []);

    function setRefeicoes(refeicoes) {
        dispatch({type: 'SET', payload: refeicoes});
    }

    function addRefeicao(refeicaoData) {
        dispatch({type: 'ADD', payload: refeicaoData});
    }

    function removeRefeicao(id) {
        dispatch({type: 'REMOVE', payload: id});
    }

    function updateRefeicao(id, refeicaoData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: refeicaoData}});
    }

    const value = {
        refeicoes: refeicaoState,
        setRefeicoes: setRefeicoes,
        addRefeicao: addRefeicao,
        removeRefeicao: removeRefeicao,
        updateRefeicao: updateRefeicao,
    };

    return (
        <RefeicaoContext.Provider value={value}>
            {children}
        </RefeicaoContext.Provider>
    );
}

export default RefeicaoContextProvider;