import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Video from './Video'
import '../css/video.css'



const videoList = [
    {
        image: 'images/sudradio.jpg',
        //url: 'uploads/Le-Grand-Débat-Pour-ou-contre-la-chloroquine-L-Alexandre-et-I-Aberkane-Les-Incorrectibles.mp4',
        url: 'https://www.youtube.com/watch?v=1ceFfP64UVY',
        title: 'SudRadio',
        description: 'Le Grand Débat : Pour ou contre la chloroquine ? L.Alexandre et I.Aberkane : Les Incorrectibles',
        channelLink: 'https://www.youtube.com/channel/UCESTwDXpoMgiYBHipMdKTkQ'
    },
    {
        image: 'images/kairos.png',
        //url: 'uploads/UN-FLIC-FRANCAIS-TEMOIGNE-IL-FAUT-SE SOULEVER.mp4',
        url: 'https://www.youtube.com/watch?v=G_WD11KLvd0',
        title: 'Kairos Presse',
        description: 'Un flic francais témoigne : IL FAUT SE SOULEVER !',
        channelLink: 'https://www.youtube.com/channel/UCP2Klbz_VJwBKQWbmhiMfcw'
    },
    {
        image: 'images/idrissaberkane.png',
        //url: 'uploads/RAOULT-AVAIT-RAISON-Donc-on-essaye-de-labattre.mp4',
        url: 'https://www.youtube.com/watch?v=kxV8mkfzYrI',
        title: 'Idriss Aberkane',
        description: 'Un conférencier annonce : RAOULT AVAIT RAISON Donc on essaye de l\'abattre',
        channelLink: 'https://www.youtube.com/channel/UCsBPtU4hJkWNQ4kA-IsxgKw'
    },
    {
        image: 'images/idrissaberkane.png',
        //url: 'uploads/Pourquoi-RAOULT-est-un-héros-IDRISS-ABERKANE.mp4',
        url: 'https://www.youtube.com/watch?v=SgxGQ7-3u-I',
        title: 'Idriss Aberkane',
        description: 'Pourquoi RAOULT est un héros ?',
        channelLink: 'https://www.youtube.com/channel/UCsBPtU4hJkWNQ4kA-IsxgKw'
    },
    {
        image: 'images/idrissaberkane.png',
        //url: 'uploads/RAOULT-est-ENCORE-un-héros-IDRISS-ABERKANE.mp4',
        url: 'https://www.youtube.com/watch?v=s4lF9ExiR8s',
        title: 'Idriss Aberkane',
        description: 'RAOULT est ENCORE un héros !',
        channelLink: 'https://www.youtube.com/channel/UCsBPtU4hJkWNQ4kA-IsxgKw'
    },
    {
        image: 'images/sudradio.jpg',
        //url: 'uploads/Didier-Raoult-chez-SudRadio.mp4',
        url: 'https://www.youtube.com/watch?v=Bl3vxcSonEU',
        title: 'SudRadio',
        description: 'Didier Raoult chez SudRadio',
        channelLink: 'https://www.youtube.com/channel/UCESTwDXpoMgiYBHipMdKTkQ'
    },
    {
        image: 'images/senat.png',
        //url: 'uploads/vaccins-laurence-cohen-demande-une-etude-sur-les-adjuvants-aluminiques.mp4',
        url: 'https://www.youtube.com/watch?v=hH3yiKFqU9Y',
        title: 'Sénat',
        description: 'Vaccins : Laurence Cohen demande une étude sur les adjuvants aluminiques',
        channelLink: 'https://www.youtube.com/channel/UCTa1bPArjpvNMgSHAb_pflA'
    },
    {
        image: 'images/sudradio.jpg',
        //url: 'uploads/debat-louis-fouche-martin-blachier-confinement-vaccin-quelles-reponses-a-la-crise-sanitaire.mp4',
        url: 'https://www.youtube.com/watch?v=HPw0c-DY9y8',
        title: 'SudRadio',
        description: 'Débat Louis Fouché & Martin Blachier : confinement vaccin quelles réponses à la crise sanitaire',
        channelLink: 'https://www.youtube.com/channel/UCESTwDXpoMgiYBHipMdKTkQ'
    },
    {
        image: 'images/rtfrance.png',
        //url: 'uploads/Louis-Fouche-met-en-PLS-deux-elus-LREM-et-UDI-en-direct.mp4',
        url: 'https://www.youtube.com/watch?v=FjC-vxPxTek',
        title: 'RT France',
        description: 'Louis Fouché met en PLS deux élus LREM et UDI en direct',
        channelLink: 'https://www.youtube.com/channel/UCqEVwTnDzlzKOGYNFemqnYA'
    },
    {
        image: 'images/dissident.png',
        //url: 'uploads/confinement-ski-et-vaccin.mp4',
        url: 'https://www.youtube.com/watch?v=NZB99TXF6C0',
        title: 'Le Dissident',
        description: 'Philippe Parola : confinement, ski et vaccin',
        channelLink: 'https://www.youtube.com/channel/UCmDL3JDnmlEYU5OT8CR9STA'
    },
    {
        image: 'images/florianphilippot.png',
        //image: 'images/yvesbarraud.png',
        //url: 'uploads/Le-Professeur-Didier-Raoult-regle-ses-comptes-En-verite.mp4',
        url: 'https://www.youtube.com/watch?v=nNaDJrh3CgM',
        title: 'Florian Philippot',
        description: 'Le Professeur Didier Raoult règle ses comptes : En vérité',
        channelLink: 'https://www.youtube.com/channel/UClaa_CwoQEmSo9Mb_M1f91g'
        //channelLink: 'https://www.youtube.com/channel/UC6CeKvArSXPA3VJ2VU5vO6A'
    },
    {
        image: 'images/cnews.jpg',
        //url: 'uploads/vaccins-les-interrogations-de-didier-raoult.mp4',
        url: 'https://www.youtube.com/watch?v=COl-Ywnogbs',
        title: 'CNews',
        description: 'Didier Raoult : Ses intérrogations sur les vaccins',
        channelLink: 'https://www.youtube.com/user/ifr48'
    },
    {
        image: 'images/neurosatis.jpg',
        //url: 'uploads/didier-raoult-le-diable-nourrit-big-pharma.mp4',
        url: 'https://www.youtube.com/watch?v=wV8_RAq216w',
        title: 'Neurosatis',
        description: 'Didier Raoult : le diable nourrit Big-pharma !',
        channelLink: 'https://www.youtube.com/channel/UC43EvXvg12N87kjr88LzAGQ'
    },
];

class Autre extends Component {
    render () {
        return (
            <div className="bg-flag-state-2 m-v-container">
                <Container>
                    <Row>
                    {videoList.map((item, idx)=>{
                        return (
                        <Col className="m-v-2" md={4} sm={4} xs={6}>
                            <Card className="bg-card">
                                <div className="img-card d-flex justify-center align-center">
                                    <Card.Img className="img-card" variant="top" src={item.image} />
                                </div>
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

export default Autre;