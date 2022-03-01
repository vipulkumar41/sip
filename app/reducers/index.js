var initialState = {

}

export default function sipCalculatorReducer(state=initialState,action){
    switch (action.type){
        case 'GOT_SIP_CAL_DATA':
            return {...state,sipCalData:action.payload}
        case 'FAILED_TO_GET_SIP_CAL_DATA':
            return {...state,sipCalData:action.payload}

            default:
                new Error('No action type matched in reducer')
    }
    return state
}