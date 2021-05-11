import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateFlashcard extends Component{
    constructor(props){
        super(props)
        this.state = {
                word: '',
                definition: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async updateCards(card, collectionid, id){ //CANT GRAB CARD ID
        await this.props.changeCard(card, collectionid, id);
        this.props.update();
    }
    
    handleSubmit(event){
        event.preventDefault();
        const card = {
            word: this.state.word,
            definition: this.state.definition,
            collection: this.props.collectionid
        }
        this.updateCards(card, this.props.collectionid, this.props.card.id);
        this.setState({
            values: {
                word: '',
                definition: ''
            }
        });
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        });
    } 


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formTermBasic">
                <Form.Label>Term</Form.Label>
                <Form.Control name="word" type="name" placeholder={this.props.card.word} value={this.state.word} required={true} onChange={this.handleChange}/>
                </Form.Group>
            
                <Form.Group controlId="formDefinitionBasic">
                <Form.Label>Definition</Form.Label>
                <Form.Control as='textarea' name='definition' placeholder={this.props.card.definition} value={this.state.definition} required={true} onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
        );
    }
}
export default UpdateFlashcard;