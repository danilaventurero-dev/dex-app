import {
    POKEMONES_FIND_SOLICITUD 
    , POKEMONES_FIND_EJECUCION
    , POKEMONES_FIND_RESPONSE
    , POKEMONES_FIND_VOID
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const findReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case POKEMONES_FIND_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case POKEMONES_FIND_EJECUCION:
            
            return{
                data: action.payload,
                msj: prevState.msj,
                success: true,
                solicitud:true
            };
        case POKEMONES_FIND_RESPONSE:
            
            return{
                data: prevState.data,
                msj: prevState.msj,
                success: false,
                solicitud: false
            };
            case POKEMONES_FIND_VOID:
            
            return{
                data: prevState.data,
                msj: prevState.msj,
                success: false,
                solicitud: false
            };
        default:
            return prevState;
    }
};

export default findReducer;