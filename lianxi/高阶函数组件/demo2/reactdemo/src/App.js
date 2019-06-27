import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
// import A from './components/A'
import B from './components/B'
// import C from './components/C'
import E from './components/E'
import F from './components/F'
import Tabbar  from './components/tabar'
import Message  from './components/contextDemo/Message'

import Shots from './components/shots'
class App extends Component {

  render() {
    return (
     <Router>
       <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={Message} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>

      // <div className="App">
      //     <Tabbar></Tabbar>
      //      {/* <A /> */}
      //      {/* <B age="18" name="Tom"/> */}
      //      {/* <C></C> */}
      //      {/* <Shots></Shots> */}
           
      // </div>

    );
  }
}



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
