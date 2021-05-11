import React, { Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import FlashcardItem from '../flashcardItem/FlashcardItem';
import Card from 'react-bootstrap/esm/Card';

class FlashcardContainer extends Component {//NEEDS COLLECTION PASSED IN TO RENDER
    constructor(props) {
        super(props);
        this.state = {
            cards: null,
            currentCard: 0,
            cardsJSX: [],
        }
        this.goToNextCard = this.goToNextCard.bind(this);
        this.goToPreviousCard = this.goToPreviousCard.bind(this);
    }

    componentDidMount(){
        this.updateCards();
    }
    
    async updateCards() {
        let response = await axios.get(`http://127.0.0.1:8000/collection/${this.props.id}/flashcard/`); //TODO put in correct url
        console.log(response.data);
        this.setState({cards: response.data});
        this.mapCards()
    }

    mapCards(){
        let renderedCards = this.state.cards.map((card) =>{
            return <FlashcardItem key={card.id} card={card} currentCard={this.state.currentCard}/>
        });
        this.setState({cardsJSX: renderedCards})
    }

    goToNextCard() {
        console.log('RUNNING NEXT')
        let tempflashcard = this.state.currentCard;
        tempflashcard++;
        if(tempflashcard === this.state.cards.length)
            tempflashcard = 0;
        this.setState({currentCard: tempflashcard});
    }

    goToPreviousCard(){
        console.log('RUNNING PREV')
        let tempflashcard = this.state.currentCard;
        tempflashcard--;
        if(tempflashcard < 0)
            tempflashcard = this.state.cards.length - 1;
        console.log(tempflashcard)
        this.setState({currentCard: tempflashcard});
    }


    render(){
        return (
            <div className='container'>
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <Button onClick={this.goToPreviousCard}>Previous</Button>
                        </td>
                        <td>
                        <Card style={{ width: '18rem' }} className='center justified'>
                            <Card.Body>
                            {this.state.cardsJSX[this.state.currentCard]}
                            </Card.Body>
                        </Card>
                        </td>
                        <td>
                            <Button onClick={this.goToNextCard}>Next</Button>
                        </td>
                        </tr>
                        <tr>
                            {this.state.currentCard + 1} of {this.state.cardsJSX.length}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default FlashcardContainer;