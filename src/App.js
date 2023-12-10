import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Menu from './Components/Menu.jsx'
import Aboutjeff from './Components/AboutJeff.jsx'
import Carrusel from './Components/Carrusel'


const Nosotros = () => <div>Nosotros</div>;
const AboutJeff = () => <div><AboutJeff></AboutJeff></div>;
const SobreSet = () => <div>Sobre Set</div>;
const Cantos = () => <div>Cantos</div>;
const Contacto = () => <div>Contacto</div>;
const Random = () => <div>Random</div>;

function App() {
  const list = [
    {
      text: 'Sobre nosotros',
      link: '/sobreElGrupo',
      element: <Nosotros />,
    },
    {
      text: 'Sobre Jeffrey',
      link: '/aboutJeff',
      element: <AboutJeff />,
    },
    {
      text: 'Sobre Set',
      link: '/sobreset',
      element: <SobreSet />,
    },
    {
      text: 'Cantos',
      link: '/cantos',
      element: <Cantos />,
    },
    {
      text: 'Contacto',
      link: '/footer',
      element: <Contacto />,
    },
    {
      text: 'Random',
      link: '/random',
      element: <Random />,
    },
  ];

  const [menu, setMenu] = useState(false);

  const handleLinkClick = () => {
    setMenu(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <Router>
      <div>
        <header className="Cabecera">
          <h1 className="Cabecera-h1">
            <Link to="/" className="Cabecera-a">
              JS
            </Link>
          </h1>
          <button
            onClick={() => {
              setMenu(!menu);
              document.body.classList.toggle('no-scroll');
            }}
            className="Cabecera-button"
          >
            <svg className="Cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
            <ul className="Cabecera-ul">
              {list.map((item, index) => (
                <li key={index} className="Cabecera-li">
                  <Link to={item.link} className="Cabecera-a" onClick={handleLinkClick}>
                    <span className="title">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div></div>} />
            {list.map((item, index) => (
              <Route key={index} path={item.link} element={item.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
