const SET_DELIVERY = 'SET_DELIVERY'
   const SET_INSTALL = 'SET_INSTALL'
   const SET_ONSTAGE = 'SET_ONSTAGE'

let initialState = {
    delivery: false,
    install: false,
    onStage: false
}

const dopDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INSTALL:
            return {...state, install: !state.install}
        case SET_DELIVERY:
            return {...state, delivery: !state.delivery}
        case SET_ONSTAGE:
            return {...state, onStage: !state.onStage}

        default: return state
    }
}

    export const isDelivery = (delivery) => ({type: SET_DELIVERY, delivery})
    export const isInstall = (install) => ({type: SET_INSTALL, install})
    export const isOnStage = (onStage) => ({type: SET_ONSTAGE, onStage})

export default dopDataReducer