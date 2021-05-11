import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
const FlashcardItem = (props) => {
    const [flipped, setFlipped] = useState(false);
    const [cardState, setCardState] = useState(props.card.word)
    const [reference, setReference] = useState('Term')
    const flipCard = () =>{
        setFlipped(!flipped);
    }
    
    useEffect (() =>{
        if(flipped){
            setCardState(props.card.definition);
            setReference('Definition');
        }
        else{
            setCardState(props.card.word);
            setReference('Term');
        }

    })

    return(
        <div onClick={() => flipCard()} >
            {reference}: {cardState}
        </div>
    )
}

export default FlashcardItem;