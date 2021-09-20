import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row } from "react-bootstrap";

// Css import

export default function LoginPage() {
    return (
        <>
            <Container className="p-5 bg-light rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 bg" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Row className='container text-center p-2'>
                        <Link className='p-3' to="/cadastro">Não tem cadastrado?</Link>
                        <Button variant="outline-primary" type="submit">
                            Entrar
                        </Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}