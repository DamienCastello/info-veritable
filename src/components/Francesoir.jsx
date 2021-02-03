import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Claude-Janvier-un-terrorisme-viral.mp4',
        title: 'FranceSoir',
        description: 'Claude Janvier en Face à Face : un terrorisme viral !'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Luc-Montagnier-au-défi-vérité.mp4',
        title: 'FranceSoir',
        description: 'Luc Montagnier au Défi de la vérité.mp4'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Christian-Perronne-au-Défi-vérité-ses-premiers-mots-après-sa-mise-à-lécart.mp4',
        title: 'FranceSoir',
        description: 'Christian Perronne au Défi vérité : ses premiers mots après sa mise à l\'écart'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Jean-Bernard-Fourtillan-au-Défi-vérité.mp4',
        title: 'FranceSoir',
        description: 'Jean-Bernard Fourtillan au Défi de la vérité'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Jean-Jacques-Crèvecoeur-au-Défi-vérité.mp4',
        title: 'FranceSoir',
        description: 'Jean-Jacques Crèvecoeur au Défi de la vérité'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Christian-Perronne-au-Défi-vérité-le-retour.mp4',
        title: 'FranceSoir',
        description: 'Christian Perronne au Défi vérité : le retour'  
    },
    {
        image: 'images/logo-francesoir.jpg',
        url: 'uploads/Francis-Lalanne-au-Défi-vérité.mp4',
        title: 'FranceSoir',
        description: 'Francis Lalanne au Défi vérité : Pétition pour déstituer Macron du pouvoir !'  
    },
];

class Francesoir extends Component {
    render () {
        return (
            <div className="bg-flag-state-3 m-v-container">
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

export default Francesoir;