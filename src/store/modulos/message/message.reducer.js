import {
    MESSAGE_SEND_SOLICITUD 
    , MESSAGE_SEND_EJECUCION
    , MESSAGE_SEND_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const messageReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case MESSAGE_SEND_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case MESSAGE_SEND_EJECUCION:
            return{
                data:action.payload.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case MESSAGE_SEND_RESPONSE:
            return{
                data: prevState.data,
                msj: prevState.msj,
                success: true,
                solicitud: false
            };
        default:
            return prevState;
    }
};

export default messageReducer;