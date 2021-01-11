import {
    MESSAGE_SEND_SOLICITUD
   ,MESSAGE_SEND_EJECUCION
   ,MESSAGE_SEND_RESPONSE
} from './const';
import { msjService } from '../../../services/mensaje.service';

const solicitudMsjActionCreator = () => ({
   type: MESSAGE_SEND_SOLICITUD,
   payload: true
})

const ejecucionMsjActionCreator = (data) => ({
   type: MESSAGE_SEND_EJECUCION,
   payload: data
})

const responseMsjActionCreator = () => ({
   type: MESSAGE_SEND_RESPONSE,
   payload: true
})

export const msjActionsAsyncCreator = (data) => {
   return (dispatch) => {
      
       dispatch(solicitudMsjActionCreator())
       msjService(data.message).then(data => {
        dispatch(ejecucionMsjActionCreator(data));
        dispatch(responseMsjActionCreator());   
       }).catch(err => {
           //dispatch(errorCreateActionCreator(err));
       })
   }
}