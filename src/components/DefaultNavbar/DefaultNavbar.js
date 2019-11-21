import React, { useState } from 'react';
import Navbar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";

const DefaultNavbar = (props) => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <Navbar
            color="primary"
            fixed="top"
        >
            <Container>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">Denny Pradipta</Navbar.Item>
                    <Navbar.Burger onClick={() => setIsMenuShown(!isMenuShown)} />
                </Navbar.Brand>
                <Navbar.Menu className={isMenuShown ? "is-block" : ""}>
                    <Navbar.Container position="end">
                        <Navbar.Item onClick={() => setIsMenuShown(!isMenuShown)} href="#about">About</Navbar.Item>
                        <Navbar.Item onClick={() => setIsMenuShown(!isMenuShown)} href="#educations">Educations</Navbar.Item>
                        <Navbar.Item onClick={() => setIsMenuShown(!isMenuShown)} href="#employments">Employments</Navbar.Item>
                        <Navbar.Item onClick={() => setIsMenuShown(!isMenuShown)} href="#portfolios">Portfolios</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default DefaultNavbar;