import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import Logo_senac_branca from '../../../../assets/Logo/Logo_Senac_White.png'
export default function StudentsComponent() {
    return (

        <>
            <div>
                <div>
                    <h1 className="h3 mt-5">No que afeta os alunos?</h1>
                    <hr />
                </div>
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
                        <Image src={Logo_senac_branca} fluid />
                        <h3 className="h5">Projetar </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vel laoreet semper sociis sed. Hac justo quisque sed elit massa, morbi. Nisl eu cursus adipiscing diam magna auctor erat nunc, ultricies. Fames sed amet congue cursus ut scelerisque felis eu, fermentum.</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}