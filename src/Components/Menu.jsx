import { useState } from 'react';
import './menu.css';
//aqui para las rutas
import { Link } from 'react-router-dom';
import App from '../App';

const Cabecera = () => {
    const list = [
        {
            text: 'Sobre nosotros',
            link: 'sobreElGrupo',
        },
        {
            text: 'Sobre Jeffrey',
            link: '/aboutJeff',
        },
        {
            text: 'Sobre Set',
            link: '/sobreset',
        },
        {
            text: 'Cantos',
            link: '/cantos',
        },
        {
            text: 'Contacto',
            link: '/footer',
        },
        {
            text: 'random',
            link: '/random',
        },
    ];


    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);

        // Agrega o quita la clase al body para habilitar/deshabilitar el scroll
        if (!menu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleLinkClick = () => {
        setMenu(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="Cabecera">
            <h1 className="Cabecera-h1">
                <a href="#" className="Cabecera-a">
                    JS
                </a>
            </h1>

            <button
                onClick={toggleMenu}
                className="Cabecera-button"
            >
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    {list.map((item, index) => (
                        <li key={index} className="Cabecera-li">
                            {/* Utiliza el componente Link en lugar de a */}
                            <Link to={item.link} className="Cabecera-a" onClick={handleLinkClick}>
                                <span className="title">{item.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Cabecera;
