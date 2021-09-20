import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListCompanies } from "../items/listCompanies";

export default function CompaniesComponent() {
    return (
        <>
            <div>
                <div>
                    <h1 className="h3 mt-5">As Empresas Conosco</h1>
                    <hr />
                </div>
                <Row>
                    {ListCompanies.map((item, index) => {
                        return (
                            <Col key={index} xs={6} md={4}  >
                                <Link to={item.link}>
                                <Image
                                    src={item.Image}
                                    alt={item.title}
                                    fluid>
                                </Image>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}