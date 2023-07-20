import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from "react-bootstrap";

// class HeaderBar extends React.Component {

const HeaderBar = () => {  
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default HeaderBar;