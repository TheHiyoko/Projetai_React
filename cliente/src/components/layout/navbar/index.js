import React from "react";

// Importando estilização
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

// Importação Do menu
import { MenuItems } from "./MenuItems";

// NavbarComponet
export default function NavbarComponet() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Projetai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {MenuItems.map((item, index) => {
                                return (
                                    <Nav.Link
                                        key={index}
                                        className={item.cName}
                                        href={item.url}>{item.title}</Nav.Link>
                                )
                            })}
                        </Nav>
                        <Nav>
                            <NavDropdown title="Mais" className="text-Secondary">
                                <NavDropdown.Item href="/cadastro">Registro</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}