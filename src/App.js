import Footer from "./components/Footer";
import GameBoard from "./components/GameWindow";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Reset from "./components/Reset";
import Score from "./containers/ScoreContainer";
import Increment from './containers/IncrementContainer'
import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Score />
        <Increment />
        <Instructions />
        <GameBoard />
        <Reset />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
