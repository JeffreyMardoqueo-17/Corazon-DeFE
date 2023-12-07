import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu.jsx'
import { Carrusel } from './Components/Carrusel.jsx';

//seccion sobre nosotros
import SobreNosotros from './Pages/SobreNosotros/SobreNosotros.jsx';
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Carrusel></Carrusel> */}
      <SobreNosotros />
    </div>
  );
}

export default App;
//este sera como nuestro inde