
const SET_HIGHT = 'SET_HIGHT'
const SET_WIDTH = 'SET_WIDTH'
const SET_KOL = 'SET_KOL'
const SET_MKV = 'SET_MKV'
const SET_MPOG = 'SET_MPOG'
const SET_RESULT = 'SET_RESULT'
const ISDOOR_TOGGLE = 'ISDOOR_TOGGLE'

let initialState = {
    height: 0,
    width: 0,
    kol: 0,
    mkv: 0,
    mpog: 0,
    res: 0,
    isDoor: false
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HIGHT:
            return {...state, height: action.height}
        case SET_WIDTH:
            return {...state, width: action.width}
        case SET_KOL:
            return {...state, kol: action.kol}
        case ISDOOR_TOGGLE:
            return {...state, isDoor: !state.isDoor}
        case SET_MKV:
            return {...state, mkv: action.mkv}
        case SET_MPOG:
            return {...state, mpog: action.mpog}


        default:
            return state
    }
}

export const setHight = (height) => ({type: SET_HIGHT, height})
export const setWidth = (width) => ({type: SET_WIDTH, width})
export const setKol = (kol) => ({type: SET_KOL, kol})
export const setMkv = (mkv) => ({type: SET_MKV, mkv})
export const setMpog = (mpog) => ({type: SET_MPOG, mpog})
export const setResult = (result) => ({type: SET_RESULT, result})
export const isDoorToggle = (isDoor) => ({type: ISDOOR_TOGGLE, isDoor})


export default inputReducer