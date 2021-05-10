import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CollectionItem = (props) => {
    const [selected, setSelected] = useState(false)
    function funct(){
        console.log(
            'butts.'
        )
    }
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.collection.title}</Card.Title>
          <Button variant="primary" onClick={() => funct()}>Show Flashcards</Button>
        </Card.Body>
      </Card>
        </div>
    )
}

export default CollectionItem;