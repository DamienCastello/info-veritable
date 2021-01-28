import './App.css'
import Ricardo from './components/Ricardo'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>BIENVENUE SUR INFO-VERITABLE</h1>
        <p>Les informations pertinentes et non censurées !</p>
      </div>
      <Ricardo />
     
      <div className="footer">
        <h2>Pensez à partager via internet et bouche-à-oreille SVP</h2>
        <p>Merci pour votre visite et à bientôt !</p>
      </div>
    </div>
  );
}

export default App;
