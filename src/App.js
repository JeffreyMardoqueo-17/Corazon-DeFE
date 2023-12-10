import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import Menu from './Components/Menu.jsx';
import { Carrusel } from './Components/Carrusel.jsx';
import SobreNosotros from './Pages/SobreNosotros/SobreNosotros.jsx';
import AboutJeff from './Components/AboutJeff.jsx';
import Cantos from './Components/Cantos.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='menu' element={<Menu></Menu>} />
          <Route path='carrusel' element={<Carrusel></Carrusel>} />
          <Route path='sobreElGrupo' element={<SobreNosotros></SobreNosotros>} />
          <Route path='aboutJeff' element={<AboutJeff></AboutJeff>} />
          <Route path='cantos' element={<Cantos></Cantos>} />
          <Route path='footer' element={<Footer></Footer>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
