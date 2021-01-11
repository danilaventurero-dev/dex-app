import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '../components/TableDark';
import {getActionsAsyncCreator as getAction} from '../store/modulos/pokemones/getAction';
import {findActionsAsyncCreator as findAction} from '../store/modulos/pokemones/findAction';
import { createBrowserHistory } from "history";

const Home = ()  => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.pokemones.get.data );
  const success = useSelector(store => store.pokemones.delete.success );
  const history = createBrowserHistory();  
  useEffect(() => {
    //dispatch(findAction());
    dispatch(getAction());
    
}, [success])

    return (
      <Table props={data} dispatch={dispatch} history={history}/>
    );
};

export default Home;