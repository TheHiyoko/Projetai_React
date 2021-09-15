import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function RegisterPage() {
    return (
        <>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Matrícula</Form.Label>
                    <Form.Control type="text" placeholder="Coloque sua matrícula" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail </Form.Label>
                    <Form.Control type="email" placeholder="Coloque seu email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Coloque seu nome" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Coloque sua Senha" />
                </Form.Group>
                <Row className='container text-center p-2'>
                    <Link className='p-3' to="/login">Já é cadastrado?</Link>
                    <Button variant="outline-primary" type="submit">
                        Registro
                    </Button>
                </Row>
            </Form>
        </>
    )
}