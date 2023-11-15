import {createContext, useReducer} from "react";

export const RefeicoesDiariasContext = createContext({
    refeicoesDiarias: [],
    setRefeicoesDiarias: (refeicoesDiarias) => {},
    addRefeicaoDia: ({id, idUsuario, data, idRefeicao, comida, quantidade, unidade, calorias}) => {},
    removeRefeicaoDia: (id) => {},
    updateRefeicaoDia: (id, {idUsuario, data, idRefeicao, comida, quantidade, unidade, calorias}) => {},
});

function refeicoesDiariasReducer(state, action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(refeicaoDia => refeicaoDia.id !== action.payload);
        case 'UPDATE':
            const updatableRefeicaoDiaIndex = state.findIndex(refeicaoDia => refeicaoDia.id === action.payload.id);
            const updatedItem = {...state[updatableRefeicaoDiaIndex], ...action.payload.data};
            const updatedRefeicoesDiarias = [...state];
            updatedRefeicoesDiarias[updatableRefeicaoDiaIndex] = updatedItem;
            return updatedRefeicoesDiarias;
        default:
            return state;
    }
}

function RefeicoesDiariasContextProvider({children}) {
    const [refeicoesDiariasState, dispatch] = useReducer(refeicoesDiariasReducer, []);

    function setRefeicoesDiarias(refeicoesDiarias) {
        dispatch({type: 'SET', payload: refeicoesDiarias});
    }

    function addRefeicaoDia(refeicaoDiaData) {
        dispatch({type: 'ADD', payload: refeicaoDiaData});
    }

    function removeRefeicaoDia(id) {
        dispatch({type: 'REMOVE', payload: id});
    }

    function updateRefeicaoDia(id, refeicaoDiaData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: refeicaoDiaData}});
    }

    const value = {
        refeicoesDiarias: refeicoesDiariasState,
        setRefeicoesDiarias: setRefeicoesDiarias,
        addRefeicaoDia: addRefeicaoDia,
        removeRefeicaoDia: removeRefeicaoDia,
        updateRefeicaoDia: updateRefeicaoDia,
    };

    return (
        <RefeicoesDiariasContext.Provider value={value}>
            {children}
        </RefeicoesDiariasContext.Provider>
    );
}

export default RefeicoesDiariasContextProvider;