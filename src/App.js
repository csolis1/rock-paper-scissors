import Footer from './components/Footer';
import GameBoard from './components/GameWindow';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Reset from './components/Reset';
import Score from './components/Score';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Score />
      <Instructions />
      <GameBoard />
      <Reset />
      <Footer />
    </div>
  );
}

export default App;

