import {
    POKEMONES_DELETE_SOLICITUD 
    , POKEMONES_DELETE_EJECUCION
    , POKEMONES_DELETE_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const findReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case POKEMONES_DELETE_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case POKEMONES_DELETE_EJECUCION:
            
            return{
                data: action.payload,
                msj: prevState.msj,
                success: false,
                solicitud:true
            };
        case POKEMONES_DELETE_RESPONSE:
            
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

export default findReducer;