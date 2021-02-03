import './css/App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Francesoir from './components/Francesoir'
import Ricardo from './components/Ricardo'
import Tvl from './components/Tvl'
import Ihumarseille from './components/Ihumarseille'
import Autre from './components/Autre'
import Objectif from './components/Objectif'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar bg="light" expand="lg">
      <Image className="justice-img" src="images/justice.jpg" roundedCircle />
        <Navbar.Brand href="/">Accueil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/francesoir">FranceSoir</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ricardo">Minute Ricardo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/tvl">TVLiberté</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ihu-marseille">IHU Marseille</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/autre">Autre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/objectif">Notre objectif</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/francesoir" component={Francesoir} />
          <Route path="/ricardo" component={Ricardo} />
          <Route path="/tvl" component={Tvl} />
          <Route path="/ihu-marseille" component={Ihumarseille} />
          <Route path="/autre" component={Autre} />
          <Route path="/objectif" component={Objectif} />
        </Switch>
      </div>  
    </Router>
  );
}



export default App;
