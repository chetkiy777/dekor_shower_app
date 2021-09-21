const SHOW_RESULT = 'SHOW_RESULT'


let initialState = {
    showResult: false
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RESULT:
            return {...state, showResult: !state.showResult}

        default: return state
    }
}

export const showResultToggle = (showResult) => ({type: SHOW_RESULT, showResult})

export default resultReducer