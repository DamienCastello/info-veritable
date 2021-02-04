import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/la-vilaine-circulaire.mp4',
        url: 'https://www.youtube.com/watch?v=bzI0CqNLOKU',
        title: 'La minute ricardo',
        description: 'La vilaine circulaire',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },
    {
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/la-minute-de-ricardo-tout-est-une-question-de-chiffres.mp4',
        url: 'https://www.youtube.com/watch?v=CPVnqLAKMbY&t=2s',
        title: 'La minute ricardo',
        description: 'Tout est une question de chiffres',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },
    /*{
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/masques-etude-allemande-une-bombe.mp4',
        title: 'La minute ricardo',
        description: 'Une étude allemande sur les masques : une bombe !',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },*/
    {
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/la-minute-de-ricardo-acceptation-ou-resistance.mp4',
        url: 'https://www.youtube.com/watch?v=ofXBGyNCcq0&t=1s',
        title: 'La minute ricardo',
        description: 'Acceptation ou résistance ?',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },
    {
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/La-Minute-de-Ricardo-la mort-mystérieuse-d-une-lanceuse-d-alerte.mp4',
        url: 'https://www.youtube.com/watch?v=c0rMYwkpbnk&t=3s',
        title: 'La minute ricardo',
        description: 'La mort mysterieuse d\'une lanceuse d\'alerte !',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },
];

class Ricardo extends Component {
    render () {
        return (
            <div className="bg-flag-state-8 m-v-container">
                <Container>
                    <Row>
                    {videoList.map((item, idx)=>{
                        return (
                        <Col className="m-v-2" md={4} sm={4} xs={6}>
                            <Card className="bg-card">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Title className="text-center m-t-1">{item.title}</Card.Title>
                                <Card.Text className="text-center h-30">{item.description}</Card.Text> 
                                <Card.Body></Card.Body>
                                <Video key={idx} url={item.url}/>
                                <Card.Footer className="h-100">{item.channelLink}</Card.Footer>
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

export default Ricardo;