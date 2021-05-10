import NavBarComponent from "./navBar/navBar";
import React, { Component } from 'react';
import axios from "axios";


class App extends Component {
    state = {
        allCollections: null,

    }
    
    componentDidMount(){
        this.gatherCollections();
    }
    
    async gatherCollections(){
        response = await axios.get(URL)
        this.setState(
            allCollections = response.data
        )
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