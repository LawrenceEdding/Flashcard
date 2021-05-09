import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlashcardContainer = () => {
    const [cards, setFlashcards] = useState(null);

    async function updateCards() {
        response = await axios.get(URL); //TODO put in correct url
        setFlashcards(response.data);
    }

    useEffect(() => {
        updateCards;
    }, [])

    return (
        <div>
            
        </div>
    )
}