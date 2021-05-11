import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBarComponent = () => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Flashcards</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;