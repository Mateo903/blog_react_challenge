import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './containers/Home/Home'
import Navbar from './components/Navbar/Navbar';
import PostDetail from './containers/PostDetail/PostDetail';
import CreatePost from './containers/CreatePost/CreatePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/createpost" component={CreatePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
