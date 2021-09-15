import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListTime } from "../items/listTime";

export default function TimeComponent() {
    return (

        <>
            <div>
                <h1 className="h3 mt-5"><Link to='/time'>Time de desenvolvimento</Link></h1>
                <hr />
            </div>
            <Row>
                {ListTime.map((item, index) => {
                    return (
                        <Col key={index} className='p-4'>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img variant="top" src={item.Image} />
                                <Card.Body>
                                    <Card.Title>{item.Name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}