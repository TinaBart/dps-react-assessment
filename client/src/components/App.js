import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Beers from './Beers';
import Beer from './Beer';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash /> 
        <Switch> 
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route component={NoMatch} /> */}
          <Route path='/beers' component={Beers} />
          <Route path='/beer' component={Beer} />
         </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
