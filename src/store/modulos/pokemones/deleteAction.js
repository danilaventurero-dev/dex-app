import {
    POKEMONES_DELETE_SOLICITUD
   ,POKEMONES_DELETE_EJECUCION
   ,POKEMONES_DELETE_RESPONSE
} from './const';
import { deleteService } from '../../../services/pokemones.service';

const solicitudDeleteActionCreator = () => ({
   type: POKEMONES_DELETE_SOLICITUD,
   payload: null
})

const ejecucionDeleteActionCreator = (data) => ({
   type: POKEMONES_DELETE_EJECUCION,
   payload: data
})

const responseDeleteActionCreator = () => ({
   type: POKEMONES_DELETE_RESPONSE,
   payload: null
})

export const deleteActionsAsyncCreator = (id) => {
   return (dispatch) => {
       dispatch(solicitudDeleteActionCreator())
       
       deleteService(id).then(data => {
           dispatch(ejecucionDeleteActionCreator(data));
               dispatch(responseDeleteActionCreator());
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorDeleteActionCreator(err));
       })
   }
}