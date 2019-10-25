const TESTE = {teste: true}

export default function(state = TESTE, action) {
    switch (action.type) {
        case 'TESTE_ACTION':
            return { ...state, teste:!state.teste }
        default:
            return state
    }
}