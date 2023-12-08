import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu.jsx'
import { Carrusel } from './Components/Carrusel.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Agrega estas importaciones

//sección sobre nosotros
import SobreNosotros from './Pages/SobreNosotros/SobreNosotros.jsx';
import AboutJeff from './Components/AboutJeff.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Carrusel></Carrusel>
        {/* <SobreNosotros /> */}
        <AboutJeff />
      </div>
    </Router>
  );
}

export default App;
