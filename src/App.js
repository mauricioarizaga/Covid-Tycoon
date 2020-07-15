import React from 'react';
import { Route } from 'react-router-dom'
import  Home  from './components/Home/Home.jsx'
import Juego from './components/juego/juego';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import FinPartida from './components/FinPartida/FinPartida'
function App() {
  return (
     <React.Fragment>
      <Route path= '/' component={NavBar} />
      <Route exact path = "/" component={Home}/>
      <Route path = "/juego" component= {Juego} />
      <Route path = "/fin" component={FinPartida} />
    </React.Fragment>
  );
}

export default App;
