import React from "react";
import Logo_senac_Preta from '../../../../assets/Logo/Logo_Senac_Black.png';
import Logo_Senac from '../../../../assets/Logo/Logo_Senac.png';
import { Col, Container, Row, Button, Image } from "react-bootstrap";

export default function IndexMainComponent() {
    return (
        <>
            <Container className="text-center" >
                <Image src={Logo_senac_Preta} height="100px" className="ml-auto" />
                <p className="pt-2">Faculdade Senac Pernambuco</p>
            </Container>
            <Row >
                <Col xs={6} className="m-auto" md={5}>
                    <h1 className="h2">O que é o projetai</h1>
                    <hr className="rounded" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vel laoreet semper sociis sed. Hac justo quisque sed elit massa, morbi. Nisl eu cursus adipiscing diam magna auctor erat nunc, ultricies. Fames sed amet congue cursus ut scelerisque felis eu, fermentum.</p>
                </Col>
                <Col xs={6} md={2} />
                <Col xs={6} md={5} >
                    <Image src={Logo_Senac} className="p-5" fluid />
                    <Button variant="outline-primary" >Saiba mais aqui</Button>
                </Col>
            </Row>
        </>
    )
}