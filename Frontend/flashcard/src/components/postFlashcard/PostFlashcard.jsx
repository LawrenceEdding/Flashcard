import React from 'react';
import useForm from '../customHooks/useForm';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostFlashcard = () => {
    const { values, handleChange, handleSubmit } = useForm(newCard);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTermBasic">
            <Form.Label>Term</Form.Label>
            <Form.Control type="name" placeholder="Enter the term" value={values.term} required={true} onChange={handleChange()}/>
            </Form.Group>
        
            <Form.Group controlId="formDefinitionBasic">
            <Form.Label>Definition</Form.Label>
            <Form.Control as='textarea' placeholder="Define Here" value={values.definition} required={true} onChange={handleChange()}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
};

export default PostFlashcard;