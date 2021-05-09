import NavBarComponent from "./navBar/navBar";
import React, { Component } from 'react';


class App extends Component {
    state = {
        nothing: null
    }
    

    render() {
        return(
            <div>
            <NavBarComponent />
            </div>
        )
    }
}
  
export default App;