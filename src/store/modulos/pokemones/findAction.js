import {
    POKEMONES_FIND_SOLICITUD
   ,POKEMONES_FIND_EJECUCION
   ,POKEMONES_FIND_RESPONSE
   ,POKEMONES_FIND_VOID
} from './const';
import { findService } from '../../../services/pokemones.service';

const solicitudFindActionCreator = () => ({
   type: POKEMONES_FIND_SOLICITUD,
   payload: null
})

const ejecucionFindActionCreator = (data) => ({
   type: POKEMONES_FIND_EJECUCION,
   payload: data
})

const responseFindActionCreator = () => ({
   type: POKEMONES_FIND_RESPONSE,
   payload: null
})

const responseVoidActionCreator = () => ({
    type: POKEMONES_FIND_VOID,
    payload: null
 })

export const findActionsAsyncCreator = (id) => {
   return (dispatch) => {
       dispatch(solicitudFindActionCreator())
       
        if (id) {
            findService(id).then(data => {
                dispatch(ejecucionFindActionCreator(data));
               
                    dispatch(responseFindActionCreator());
                
            }).catch(err => {
                console.log(err);
                //dispatch(errorFindActionCreator(err));
            })
        } else {
            
             dispatch(responseVoidActionCreator());
            
        }
       
   }
}