import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import Menu from './Components/Menu.jsx';
import { Carrusel } from './Components/Carrusel.jsx';
import SobreNosotros from './Pages/SobreNosotros/SobreNosotros.jsx';
import AboutJeff from './Components/AboutJeff.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className='container mt-5'>
      <Routes>
        <Route path='menu' element ={Menu}/>
      </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
