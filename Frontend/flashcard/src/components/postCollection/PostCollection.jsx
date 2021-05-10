import React from 'react';
import useForm from '../customHooks/useForm';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const PostCollection = (props) => {//Probably need to change values into props.values??
    const { values, handleChange, handleSubmit } = useForm(updateCards);

    const updateCards = () =>{ //ADD NEW CARD TO CURRENT LIST OF FLASHCARDS
        props.addNewCollection(); //MAKE SURE THE VALUES CLEAN UP AFTER
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitleBasic">
            <Form.Label>Term</Form.Label>
            <Form.Control type="name" placeholder="Enter the Title" value={values.title} required={true} onChange={handleChange()}/>
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
};

export default PostCollection;