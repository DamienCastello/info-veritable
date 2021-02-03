import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/didier-raoult-denonce-la-corruption-le-remdesivir-et-gilead.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult dénonce la corruption : le remdesivir et gilead'  
    },
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/soin-mutants-vaccin.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult : soin,mutants et vaccin'  
    },
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/arretons-davoir-peur.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult : Arrêtons d\'avoir peur !'  
    },
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/bilan-2020.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult : bilan 2020'  
    },
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/vaccins-les-interrogations-de-didier-raoult.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult : Ses intérrogations sur les vaccins'  
    },
    {
        image: 'images/ihumarseille.png',
        url: 'uploads/didier-raoult-le-diable-nourrit-big-pharma.mp4',
        title: 'IHU Marseille',
        description: 'Didier Raoult : le diable nourrit Big-pharma !'  
    },
];

class Ihumarseille extends Component {
    render () {
        return (
            <div className="bg-flag-state-7 m-v-container">
                <Container>
                    <Row>
                    {videoList.map((item, idx)=>{
                        return (
                        <Col className="m-v-2" md={4} sm={4} xs={6}>
                            <Card className="bg-card">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Title className="text-center m-t-1">{item.title}</Card.Title>
                                <Card.Text className="text-center h-30">{item.description}</Card.Text> 
                                <Card.Body>
                                    
                                </Card.Body>
                                <Video key={idx} url={item.url}/>
                            </Card>
                        </Col>
                        )
                    })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Ihumarseille;