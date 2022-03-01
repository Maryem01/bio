import "./App.css";
import Information from "./profile/Component";
import React, {  Children, Component } from "react";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Information
          name="maryem Hayder"
          quotes=" A son asked his father a programmer why the sun rises in the east and sets in the
         west His response It works  dont touch"
          job="Webdeveloper "><src img ="img.jpeg"/></Information>
        
        
        </div>
    );
  }
}

export default App;
