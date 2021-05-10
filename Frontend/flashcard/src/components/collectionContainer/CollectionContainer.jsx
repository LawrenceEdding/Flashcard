import React, { useState } from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionContainer = (props) => {
    const [currentCollection, setCurrentCollection] = useState(null)
    
    return(
        <div>
            {props.renderedCollections}
        </div>
    )
}

export default CollectionContainer;