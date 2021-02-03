import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/sudradio.jpg',
        url: 'uploads/Le-Grand-Débat-Pour-ou-contre-la-chloroquine-L-Alexandre-et-I-Aberkane-Les-Incorrectibles.mp4',
        title: 'SudRadio',
        description: 'Le Grand Débat : Pour ou contre la chloroquine ? L.Alexandre et I.Aberkane : Les Incorrectibles'  
    },
    {
        image: 'images/kairos.png',
        url: 'uploads/UN-FLIC-FRANCAIS-TEMOIGNE-IL-FAUT-SE SOULEVER.mp4',
        title: 'Kairos Presse',
        description: 'Un flic francais témoigne : IL FAUT SE SOULEVER !'  
    },
    {
        image: 'images/idrissaberkane.png',
        url: 'uploads/RAOULT-AVAIT-RAISON-Donc-on-essaye-de-labattre.mp4',
        title: 'Idriss Aberkane',
        description: 'Un conférencier annonce : RAOULT AVAIT RAISON Donc on essaye de l\'abattre'  
    },
    {
        image: 'images/idrissaberkane.png',
        url: 'uploads/Pourquoi-RAOULT-est-un-héros-IDRISS-ABERKANE.mp4',
        title: 'Idriss Aberkane',
        description: 'Pourquoi RAOULT est un héros ?'  
    },
    {
        image: 'images/idrissaberkane.png',
        url: 'uploads/RAOULT-est-ENCORE-un-héros-IDRISS-ABERKANE.mp4',
        title: 'Idriss Aberkane',
        description: 'RAOULT est ENCORE un héros !'  
    },
    {
        image: 'images/sudradio.jpg',
        url: 'uploads/Didier-Raoult-chez-SudRadio.mp4',
        title: 'SudRadio',
        description: 'Didier Raoult chez SudRadio'  
    },
    {
        image: 'images/senat.png',
        url: 'uploads/vaccins-laurence-cohen-demande-une-etude-sur-les-adjuvants-aluminiques.mp4',
        title: 'Sénat',
        description: 'Vaccins : Laurence Cohen demande une étude sur les adjuvants aluminiques'  
    },
    {
        image: 'images/sudradio.jpg',
        url: 'uploads/debat-louis-fouche-martin-blachier-confinement-vaccin-quelles-reponses-a-la-crise-sanitaire.mp4',
        title: 'SudRadio',
        description: 'Débat Louis Fouché & Martin Blachier : confinement vaccin quelles réponses à la crise sanitaire'  
    },
    {
        image: 'images/rtfrance.png',
        url: 'uploads/Louis-Fouche-met-en-PLS-deux-elus-LREM-et-UDI-en-direct.mp4',
        title: 'RT France',
        description: 'Louis Fouché met en PLS deux élus LREM et UDI en direct'  
    },
    {
        image: 'images/cnews.jpg',
        url: 'uploads/confinement-ski-et-vaccin.mp4',
        title: 'CNews',
        description: 'Philippe Parola : confinement, ski et vaccin'  
    },
    {
        image: 'images/florianphilippot.png',
        url: 'uploads/Le-Professeur-Didier-Raoult-regle-ses-comptes-En-verite.mp4',
        title: 'Florian Philippot',
        description: 'Le Professeur Didier Raoult règle ses comptes : En vérité'  
    },
];

class Autre extends Component {
    render () {
        return (
            <div className="bg-flag-state-1 m-v-container">
                <Container>
                    <Row>
                    {videoList.map((item, idx)=>{
                        return (
                        <Col className="m-v-2" md={4} sm={4} xs={6}>
                            <Card className="bg-card">
                                <Card.Img className="img-card" variant="top" src={item.image} />
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

export default Autre;