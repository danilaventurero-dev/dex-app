import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Row,Container,Col } from 'reactstrap';
import Home from './view/Home';
import Menu from './components/Menu';
import sendMessage from './view/sendMessage';
import ver from './view/ver';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container className="themed-container" fluid={true}> 
          <Row>
            <Col sm="2">
              <Menu/>
            </Col>
            <Col sm="10">
              <Route path="/" exact component={Home}/>  
              <Route path="/sendMessage" exact component={sendMessage}/>  
              <Route path="/ver" exact component={ver}/>  
            </Col>
          </Row>
        </Container>
      </Router>
      </Provider>
  );
}

export default App;
