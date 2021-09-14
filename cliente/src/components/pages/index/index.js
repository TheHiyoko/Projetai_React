import React from "react";
import Logo_senac_Preta from '../../../assets/Logo/Logo_Senac_Black.png'
import Logo_senac_branca from '../../../assets/Logo/Logo_Senac_White.png'
import Logo_Senac from '../../../assets/Logo/Logo_Senac.png'
import { Image, Row, Col, Button, Container } from "react-bootstrap";

export default function IndexComponent() {
    return (
        <>
            <Container className="pt-3">
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
                {/* Section O que afeta os alunos */}
                <section>
                    <h1 className="h3 mt-5">No que afeta os alunos?</h1>
                    <hr />
                    <Row>
                        <Col className="p-5 m-4">
                            <Image className="bg-dark rounded" src={Logo_senac_branca} fluid />
                            <h3 className="h5">Liderança e Trabalho em equipe </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vel laoreet semper sociis sed. Hac justo quisque sed elit massa, morbi. Nisl eu cursus adipiscing diam magna auctor erat nunc, ultricies. Fames sed amet congue cursus ut scelerisque felis eu, fermentum.</p>
                        </Col>
                        <Col className="p-5 m-4">
                            <Image className="bg-dark rounded" src={Logo_senac_branca} fluid />
                            <h3 className="h5">Inovar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vel laoreet semper sociis sed. Hac justo quisque sed elit massa, morbi. Nisl eu cursus adipiscing diam magna auctor erat nunc, ultricies. Fames sed amet congue cursus ut scelerisque felis eu, fermentum.</p>
                        </Col>
                        <Col className="p-5 m-4">
                            <Image src={Logo_Senac} fluid />
                            <h3 className="h5">Projetar </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vel laoreet semper sociis sed. Hac justo quisque sed elit massa, morbi. Nisl eu cursus adipiscing diam magna auctor erat nunc, ultricies. Fames sed amet congue cursus ut scelerisque felis eu, fermentum.</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}