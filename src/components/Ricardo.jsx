import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const listUrl = [
    'videos/la-minute-de-ricardo-tout-est-une-question-de-chiffres.mp4',
    'videos/masques-etude-allemande-une-bombe.mp4',
    'videos/la-minute-de-ricardo-acceptation-ou-resistance.mp4',
    'videos/la-vilaine-circulaire.mp4'
  ];

class Ricardo extends Component {
    render () {
        return (
            <Container fluid>
                <Row>
                {listUrl.map((url, idx)=>{
                    return (
                    <Col xs={3}>
                        <Card className="video-card">
                            <Card.Img variant="top" src="images/logo-francesoir.jpg" />
                            <Card.Body>
                                <Card.Title>La minute ricardo</Card.Title>
                                <Card.Text>
                                La vilaine circulaire
                                </Card.Text> 
                            </Card.Body>
                            <Video key={idx} url={url}/>
                        </Card>
                    </Col>
                    )
                })}
                </Row>
            </Container>
        )
    }
}

export default Ricardo;