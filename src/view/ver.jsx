import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Form from '../components/Form';
import {getActionsAsyncCreator as getAction} from '../store/modulos/pokemones/getAction';


const Ver = ()  => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.pokemones.get.data );
  
  const success = useSelector(store => store.pokemones.delete.success );

  useEffect(() => {
    //dispatch(getAction());
    
}, [success])

    return (
      <Form />
    );
};

export default Ver;