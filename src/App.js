import React, { Component }from 'react';
import { CardDeck, Col, Card, CardHeader, Button, CardBody, CardText, CardFooter } from 'reactstrap';
import Data from './components/Data'

class App extends Component {

  render () {
    return (
      <div className="App">
        <Data />
      </div>
    );
  }
}

export default App;
