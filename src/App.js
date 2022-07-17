

import React, { Component } from 'react';
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';


class App extends Component {

  render() {
  return (
    <div className="App">
      
      
      <header className="App-header" >
      <LoginButton />
      <LogoutButton />
      <br />
       
        
      </header>
    </div>
  );
}
}

export default App;
