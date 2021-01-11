import {
    POKEMONES_GET_SOLICITUD 
    , POKEMONES_GET_EJECUCION
    , POKEMONES_GET_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const getReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case POKEMONES_GET_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case POKEMONES_GET_EJECUCION:
            
            return{
                data: action.payload,
                msj: prevState.msj,
                success: false,
                solicitud:true
            };
        case POKEMONES_GET_RESPONSE:
            
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

export default getReducer;