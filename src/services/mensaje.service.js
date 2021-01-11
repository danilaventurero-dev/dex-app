  import axios from 'axios';
import {  API_HOST  } from './config';

const MODULE = 'publishMessage';

export const msjService = (message) => {
    return new Promise((resolve, reject) => {
        
        axios.post(`${API_HOST}/${MODULE}`, null, {
            params: {
                message
              }
           /* headers: {
                authorization: `bearer ${jwt}`,
            }*/
        }).then(data => {
            
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}