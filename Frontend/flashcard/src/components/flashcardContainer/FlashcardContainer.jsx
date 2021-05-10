import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlashcardContainer = (props) => {
    const [cards, setFlashcards] = useState(null);
    const [currentCard, setCurrentCard] = useState(0);

    async function updateCards() {
        response = await axios.get(URL); //TODO put in correct url
        setFlashcards(response.data);
    }

    const goToNextCard = () =>{
        let tempflashcard = currentCard;
        tempflashcard++;
        if(tempflashcard === cards.length)
            tempflashcard = 0;
        setCurrentCard(tempflashcard);
    }

    const goToPreviousCard = () => {
        let tempflashcard = currentCard;
        tempflashcard--;
        if(tempflashcard < 0)
            tempflashcard = cards.length - 1;
        setCurrentCard(tempflashcard);
    }

    useEffect(() => {
        updateCards;
    }, [cards])



    return (
        <div>

        </div>
    )
}

export default FlashcardContainer