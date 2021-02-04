import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import VideoHome from './VideoHome'
import '../css/video.css'

const videoList = [
    {
        image: 'images/sudradio.jpg',
        //url: 'uploads/Le-Grand-Débat-Pour-ou-contre-la-chloroquine-L-Alexandre-et-I-Aberkane-Les-Incorrectibles.mp4',
        url: 'https://www.youtube.com/watch?v=1ceFfP64UVY',
        title: 'SudRadio',
        description: 'Le Grand Débat : Pour ou contre la chloroquine ? L.Alexandre et I.Aberkane : Les Incorrectibles',
        homeDescription: 'Un débat très intéressant qui parle de lui même !',
        channelLink: 'https://www.youtube.com/channel/UCESTwDXpoMgiYBHipMdKTkQ'
    },
    {
        image: 'images/kairos.png',
        //url: 'uploads/UN-FLIC-FRANCAIS-TEMOIGNE-IL-FAUT-SE SOULEVER.mp4',
        url: 'https://www.youtube.com/watch?v=G_WD11KLvd0',
        title: 'Kairos Presse',
        description: 'Un grand merci à Kairos Presse pour ce témoignage.',
        homeDescription: 'Un flic francais témoigne : IL FAUT SE SOULEVER !',
        channelLink: 'https://www.youtube.com/channel/UCP2Klbz_VJwBKQWbmhiMfcw'
    },
    {
        image: 'images/logo-francesoir.jpg',
        //url: 'uploads/Jean-Jacques-Crèvecoeur-au-Défi-vérité.mp4',
        url: 'https://www.youtube.com/watch?v=1_W58OyzBtg',
        title: 'FranceSoir',
        description: 'Jean-Jacques Crèvecoeur au Défi de la vérité',
        homeDescription: 'Ne soyez plus paralysés et condamné à l\'inaction à cause de la peur que le gouvernement alimente chaque jour. Écoutez ces sages parolles pour briser ces chaines !',
        channelLink: 'https://www.youtube.com/channel/UC0AuOxCr9TZ0TtEgL1zpIgA'
    },
];

class Home extends Component {
    render () {
        return (
            <div className="bg-flag-state-7 m-v-container">
                <div className="header">
                    <h1>BIENVENUE SUR INFO-VERITABLE</h1>
                    <p>Les informations pertinentes et non censurées !</p>

                    <h2>AVANT TOUTE CHOSE</h2>
                    <p>Le but de ce site est avant tout, de faire grandir la communauté des personnes ayant conscience des faits liés à la covid (propagande, censure, mesures sanitaires inutilles, etc ...).</p>
                    <p>Pour ce faire, nous avons regroupé les informations pertinentes provenant de médias et presses ayant leur liberté rédactionnelle ou de lanceurs d'alerte.</p>
                    <p>L'objectif est donc de faire relais vers ces derniers en vous renvoyant vers leurs chaînes youtube (ou autre).</p>
                    <p>Un lien de redirection sera présent en dessous de chaques vidéos afin que vous puissiez y abonner ou liker la vidéo afin de faire grandir la communauté.</p>
                    <p>Nous désirons simplement que les choses changent de manière PACIFIQUE et ne prônons en aucun cas une révolte par la violence.</p>
                </div>
                <Container>
                    <Row>
                    {videoList.map((item, idx)=>{
                        return (
                        <Card className="bg-card w-full m-v-2">
                           <Col className="text-center m-v-2" md={12} sm={12} xs={12}>
                                <Card.Text className="size-lg h-30">{item.homeDescription}</Card.Text> 
                                <VideoHome key={idx} url={item.url}/>
                                <Card.Text className="h-30">{item.description}</Card.Text>  
                            </Col>
                        </Card>
                        )
                    })}
                    </Row>
                </Container>
                <div className="footer">
                    <h2>Pensez à partager via internet et bouche-à-oreille SVP</h2>
                    <p>Merci pour votre visite et à bientôt !</p>
                </div>
            </div>
        )
    }
}

export default Home;