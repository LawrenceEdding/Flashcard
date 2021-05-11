import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FlashcardContainer from '../flashcardContainer/FlashcardContainer';
import axios from 'axios';

const CollectionItem = (props) => {
    let initialButtonText = 'Show Flashcards';


    const [selected, setSelected] = useState(false)
    const [displayText, setDisplayText]= useState(initialButtonText)
    const [cards, setFlashcards] = useState(null);

    const funct = async () =>{
        let response = await axios.get(`http://127.0.0.1:8000/collection/${props.id}/flashcard/`); //TODO put in correct url
        setFlashcards(response.data);
        console.log(props.id, 'funct')
        if(displayText === initialButtonText){
            setDisplayText('Show all Collections');
            setSelected(true);
        }
        else{
            setDisplayText(initialButtonText);
            setSelected(false);
        }
    }

    const displayFlashcards = () =>{
        if(selected){
            return (
                <FlashcardContainer collection={props.collection} id={props.id}/>
            )
        }
        return null;
    }
    
    return (
        <div>
        <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title>{props.collection.title}</Card.Title>
          <Button variant="primary" onClick={() => funct()}>{displayText}</Button>
        </Card.Body>
      </Card>
      {displayFlashcards()}
        </div>
    )
}

export default CollectionItem;