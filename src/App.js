import Header from './Components/Header';
import Score from './Components/Score'
import Instructions from './Components/Instructions'
import GameBoard from './Components/GameWindow'
import Reset from './Components/Reset'
import Footer from './Components/Footer';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Score/>
      <Instructions/>
      <GameBoard/>
      <Reset/>
      <Footer/>
    </div>
  );
}

export default App;
