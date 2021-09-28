import React from "react";
import { Card, CardGroup, Button, Container, Image } from "react-bootstrap";
import abelhas from "./src/abelha.png"
import VideoJS from "./src/video";
//participantes imagens
import july from "./src/participantes/july.jpg";
import paulo from "./src/participantes/paulo.jpg";
import marcos from "./src/participantes/marcos.jpg"



export default function Projects(){
    return(
        <>
            <Container>   
                <Image src={abelhas} fluid style={{borderRadius: '5px'}}/>
                <div>
                    <hr />
                        <VideoJS/>
                    <hr/>
                    <div className="d-grid gap-2">
                        <Button variant='dark' size='lg' > Apresentação</Button>
                    </div>
                    
                    <h1 className="h1" style={{display: "flex", marginTop: '20px',marginBottom: '20px'}}>Pesquisa de abelhas</h1> 
                    <p>Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.E
                    iusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.
                    Eiusmod ullamco esse nisi ipsum aute laborum ex nostrud anim et consectetur 
                    ex amet. Aliquip incididunt sint consectetur amet magna enim veniam. Tempor 
                    culpa ad non eiusmod adipisicing minim aliquip proident amet commodo proident.</p>
                </div>
                <div>
                    <h3 className="h3" style={{marginBottom: '20px', marginTop: '30px'}}>Participantes</h3>
                    <CardGroup>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Img variant="top" src={july} fluid />
                        <Card.Body>
                            <Card.Title>Participante_1</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Img variant="top" src={paulo} fluid />
                        <Card.Body>
                            <Card.Title>Participante_2</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card fluid style={{margin: '8px'}}>
                        <Card.Img variant="top" src={marcos} fluid s/>
                        <Card.Body>
                            <Card.Title>Participante_3</Card.Title>
                            <Card.Text>
                                Duis deserunt ad veniam enim fugiat incididunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </div>
            </Container>
        </>
    )
}


