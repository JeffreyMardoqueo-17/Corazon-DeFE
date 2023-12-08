import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu.jsx';
import { Carrusel } from './Components/Carrusel.jsx';
import SobreNosotros from './Pages/SobreNosotros/SobreNosotros.jsx';
import AboutJeff from './Components/AboutJeff.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Menu />
          <Carrusel /> */}
          <Route path="/sobrenosotros" component={SobreNosotros} />
          <Route path="/aboutjeff" component={AboutJeff} />

          {/* Agrega más rutas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
