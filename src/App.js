import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu.jsx'
import { Carrusel } from './Components/Carrusel.jsx';
function App() {
  return (
    <div className="App">
      <Menu />
      <Carrusel></Carrusel>
    </div>
  );
}

export default App;
//este sera como nuestro index