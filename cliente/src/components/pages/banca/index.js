import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BoardComponent from "./bancaComponent";

export default function BoardPage() {
    return (
        <>
            <Container>
                <h1>Banca De Participantes</h1>
                <Link><Button variant="outline-primary">Convidados</Button></Link>
                <Link><Button variant="outline-primary">Professores</Button></Link>
            </Container>
            <BoardComponent />
        </>
    )
}