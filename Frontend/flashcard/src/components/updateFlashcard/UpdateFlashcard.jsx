import React from 'react';

const UpdateFlashcard = (props) =>{
    const { values, handleChange, handleSubmit } = useForm(updateCards);

    const updateCards = () =>{
        props.update();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTermBasic">
            <Form.Label>Term</Form.Label>
            <Form.Control type="name" placeholder={values.term} value={values.term} required={true} onChange={handleChange()}/>
            </Form.Group>
        
            <Form.Group controlId="formDefinitionBasic">
            <Form.Label>Definition</Form.Label>
            <Form.Control as='textarea' placeholder={values.definition} value={values.definition} required={true} onChange={handleChange()}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
}

export default UpdateFlashcard;