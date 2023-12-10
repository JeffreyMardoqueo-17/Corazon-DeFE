import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import Menu from './Components/Menu.jsx';
import { Carrusel } from './Components/Carrusel.jsx';
import AboutJeff from './Components/AboutJeff.jsx';
import Footer from './Components/Footer.jsx';
import SectionCantos from './Pages/SectionCantos.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='menu' element={<Menu></Menu>} />
          <Route path='carrusel' element={<Carrusel></Carrusel>} />
          {/* <Route path='sobreElGrupo' element={<SobreNosotros></SobreNosotros>} /> */}
          <Route path='aboutJeff' element={<AboutJeff></AboutJeff>} />
          <Route path='cantos' element={<SectionCantos></SectionCantos>} />
          <Route path='footer' element={<Footer></Footer>} />
          {/* //COMPONENTES DE LA PAGINA PRINCIPAL// */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
