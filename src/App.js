import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar">
            <h2 className="center ">Post It</h2>
          </div>

          <div className="leftPanel">
             <PostForm />
          </div>
          <div className="rightPanel">
            <AllPost />
          </div>
        
          
      </div>
    );
  }
}

export default App;
