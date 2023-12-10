import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link de react-router-dom

import './menu.css';

const Cabecera = () => {
    // Actualiza las rutas para que coincidan con los IDs de las secciones
    const list = [
        {
            text: 'Sobre nosotros',
            link: '#sobreElGrupo',
        },
        {
            text: 'Sobre Jeffrey',
            link: '#aboutJeff',
        },
        {
            text: 'Sobre Set',
            link: '#sobreset',
        },
        {
            text: 'Cantos',
            link: '#cantos',
        },
        {
            text: 'Contacto',
            link: '#footer',
        },
        {
            text: 'Random',
            link: '#random',
        },
    ];

    const [menu, setMenu] = useState(false);

    // Función para manejar el clic en los enlaces y realizar un desplazamiento suave
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Cierra el menú y restaura el desplazamiento del cuerpo
        setMenu(false);
        document.body.classList.remove('no-scroll');
    };

    // Renderiza el componente
    return (
        <header className="Cabecera">
            <h1 className="Cabecera-h1">
                {/* Utiliza Link para el logo */}
                <Link to="/" className="Cabecera-a">
                    JS
                </Link>
            </h1>

            <button
                onClick={() => {
                    setMenu(!menu);
                    // Agrega o quita la clase al body para habilitar/deshabilitar el scroll
                    document.body.classList.toggle('no-scroll');
                }}
                className="Cabecera-button"
            >
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    {/* Utiliza el método map para renderizar la lista de enlaces */}
                    {list.map((item, index) => (
                        <li key={index} className="Cabecera-li">
                            {/* Utiliza el componente Link en lugar de a */}
                            <a
                                href={item.link}
                                className="Cabecera-a"
                                onClick={(e) => handleLinkClick(e, item.link.substring(1))}
                            >
                                <span className="title">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Cabecera;
