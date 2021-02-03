import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/TVL-censuré-Elise-Blaise-vous-explique-tout.mp4',
        title: 'TV Liberté',
        description: 'TVL censuré : Élise Blaise vous explique tout !'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/Confinement-Macron-fait-durer-le-plaisir-JT-du-lundi-1er-février-2021.mp4',
        title: 'TV Liberté',
        description: 'JT du lundi 01 février 2021 : Confinement : Macron fait durer le plaisir.'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/Retour-vers-le-confinement-3-JT-du-vendredi-29-janvier-2021.mp4',
        title: 'TV Liberté',
        description: 'JT du vendredi 29 janvier 2021 : Retour vers le confinement 3'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/vaccins-variants-traitements-le-point-du-professeur-raoult-jt-du-mercredi-27-janvier-2021.mp4',
        title: 'TV Liberté',
        description: 'JT du mercredi 27 janvier 2021 : Vaccins, variants et traitements. Le point du professeur Raoult'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/castex-une-piqure-et-au-lit-jt-du-vendredi-15-janvier-2021.mp4',
        title: 'TV Liberté',
        description: 'JT du vendredi 15 janvier 2021 : Castex : une piqure et au lit ?'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/Dictature-sanitaire-et-passeport-vaccinal-le-plan-Macron-JT-du-mardi-22-décembre-2020.mp4',
        title: 'TV Liberté',
        description: 'JT du mardi 22 décembre 2020 : Dictature sanitaire et passeport vaccinal ... le plan Macron'  
    },
    {
        image: 'images/logo-tvl.jpg',
        url: 'uploads/Nouveau-variant-nouveau-confinement-JT-du-lundi-21-décembre-2020.mp4',
        title: 'TV Liberté',
        description: 'JT du lundi 21 décembre 2020 : Nouveau variant & nouveau confinement'  
    },
];

class Tvl extends Component {
    render () {
        return (
            <div className="bg-flag-state-4 m-v-container">
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

export default Tvl;