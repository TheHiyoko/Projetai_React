import React from "react";
import { Col, Image, Row } from "react-bootstrap";
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
                                <Image
                                    src={item.Image}
                                    fluid>
                                </Image>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}