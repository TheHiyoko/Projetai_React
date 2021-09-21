import React, { useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import http from "../../../api";


export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerSubmit = () => {
        http.post("/user/register", {
            name: name,
            password: password,
            email: email
        }).then((response) => {
            alert('sucesso');
            console.log(response.data)
        }).catch((err) => { 
            alert(err); 
        });
    };
    return (
        <>
            <Container>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Matrícula</Form.Label>
                        <Form.Control type="text" placeholder="Coloque sua matrícula" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail </Form.Label>
                        <Form.Control type="email" placeholder="Coloque seu email" 
                        onChange={(e) => { setEmail(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Coloque seu nome" 
                        onChange={(e) => { setName(e.target.value); }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Coloque sua Senha" 
                        onChange={(e) => { setPassword(e.target.value); }} />
                    </Form.Group>
                    <Row className='container text-center p-2'>
                        <Link className='p-3' to="/login">Já é cadastrado?</Link>
                        <Button variant="outline-primary" onClick={registerSubmit}>
                            Registro
                        </Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}