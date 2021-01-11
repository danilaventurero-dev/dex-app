import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Table,Button} from 'reactstrap';
import {deleteActionsAsyncCreator as deleteAction} from '../store/modulos/pokemones/deleteAction';
import {findActionsAsyncCreator as findAction} from '../store/modulos/pokemones/findAction';
import { useHistory } from 'react-router-dom';


const TableDark = (props) => {
  const findSuccess = useSelector(store => store.pokemones.find.success );
  //const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    
    if(findSuccess){
      history.push({
        pathname: '/ver',
      });
    }
}, [findSuccess])

  return (
            <Table striped >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
              {
              props  ? props.props.map(item=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                  <td>{item.height}</td>
                  <td> <Button onClick={() => props.dispatch(findAction(item.id))} color="primary">VER/EDIT</Button>{' '}
                            <Button onClick={() => props.dispatch(deleteAction(item.id))}  color="danger">BORRAR</Button>
                            </td>
                </tr>
              ))
              :
              <tr>
                  <td>No</td>
                  <td>Hay</td>
                  <td>Informacion</td>
                  <td>para mostrar...</td>
              </tr>
              }
              </tbody>
      </Table>
    );
};

export default TableDark;