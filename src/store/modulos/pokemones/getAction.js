import {
    POKEMONES_GET_SOLICITUD
   ,POKEMONES_GET_EJECUCION
   ,POKEMONES_GET_RESPONSE
} from './const';
import { getService } from '../../../services/pokemones.service';

const solicitudGetActionCreator = () => ({
   type: POKEMONES_GET_SOLICITUD,
   payload: null
})

const ejecucionGetActionCreator = (data) => ({
   type: POKEMONES_GET_EJECUCION,
   payload: data
})

const responseGetActionCreator = () => ({
   type: POKEMONES_GET_RESPONSE,
   payload: null
})

export const getActionsAsyncCreator = () => {
   return (dispatch) => {
       dispatch(solicitudGetActionCreator())
       
       getService().then(data => {
           dispatch(ejecucionGetActionCreator(data));
               dispatch(responseGetActionCreator());
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorFindActionCreator(err));
       })
   }
}