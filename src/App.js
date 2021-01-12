import React, { Component } from "react";
import FormEdit from "./FormEdit";
import Text from "./Text";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Text className="greeting" text="WELCOME!"/>
          <Text className="message"  text="Please click on 'edit' in order to enter your full name in the spaces provided."/>
          <Text className="message1" text="Once, you're done - click 'save' to store your full name, or you can press 'cancel' if you decide not to."/>
          <FormEdit firstName= {""} lastName= {""} edit= {false}/>
      </div>
  );
  }
}

export default App;
