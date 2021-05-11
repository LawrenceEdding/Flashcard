import NavBarComponent from "./navBar/navBar";
import React, { Component } from 'react';
import axios from "axios";
import CollectionContainer from "./collectionContainer/CollectionContainer";
import CollectionItem from './collectionItem/CollectionItem';

class App extends Component {
    state = {
        allCollections: null,
        displayCollections: null,
    }
    
    componentDidMount(){
        this.gatherCollections();
    }
    
    async gatherCollections(){
        let response = await axios.get('http://127.0.0.1:8000/collection/')
        this.setState({
            allCollections: response.data
        });
        this.mapCollections();
    }
    // filterComments(video){//FIXME call me onclick to loading vid.
    //     if(!video){
    //         return null
    //     }
    //     const renderedComments =  this.state.comments.filter(comment => comment.video_id === video.id.videoId);
    //     this.mapComments(renderedComments);
    // }
    mapCollections(){
        let renderedCollections = this.state.allCollections.map((collection, index) => {
            console.log(index, 'COLLECTIONID')
            return <CollectionItem key={collection.title} collection={collection} id={index+1}/>
    });
    this.setState({displayCollections: renderedCollections})
    }

    render() {
        return(
            <div>
            <NavBarComponent />
            <CollectionContainer renderedCollections={this.state.displayCollections} />
            </div>
        )
    }
}
  
export default App;