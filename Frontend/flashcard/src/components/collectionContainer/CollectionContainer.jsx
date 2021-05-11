import React, { useEffect, useState } from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionContainer = (props) => {
    const [currentCollection, setCurrentCollection] = useState(null)
    
    useEffect(() => {
        if(props.selected === true){
            setCurrentCollection(props.selectedCollections)
        }

    })

    if(currentCollection === null){
        return(
            <div className='container'>
                {props.renderedCollections}
            </div>
        )
    }
    else{
        return(
            <div className='container'>
                {currentCollection}
            </div>
        )
    }
}

export default CollectionContainer;