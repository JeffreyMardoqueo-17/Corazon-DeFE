import { useState } from 'react';
import './menu.css'

const Cabecera = () => {

    const list = [
        {
            text: 'Sobre nosotros',
            link: '#',
        },
        {
            text: 'Sobre Jeffrey',
            link: '#',
        },
        {
            text: 'Sobre Set',
            link: '#',
        },
        {
            text: 'Cantos',
            link: '#',
        },
        {
            text: 'Contacto',
            link: '#',
        },
        {
            text: 'random',
            link: '#',
        }
    ]

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="Cabecera">
            <h1 className="Cabecera-h1">
                <a href="#" className="Cabecera-a">
                    J.J
                </a>
            </h1>

            <button
                onClick={toggleMenu}
                className="Cabecera-button">
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>



            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                {list.map((item, index) => (
                    <ul className='Cabecera-ul'>
                        <li key={index} className='Cabecera-li'>
                            <a href={item.link} className='Cabecera-a'>
                                <span className="icon">
                                    {item.icon}
                                </span>
                                <span className="title">{item.text}</span>
                            </a>
                        </li>

                    </ul>
                ))}
            </nav>
            {/* <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a"> Obvio</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Yo siempre guapo</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Quierooo</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Gnaas de cafe</a></li>
                    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Obvio yo soy Jeff 😎</a></li>
                </ul>
            </nav> */}

        </header>
    )
}

export default Cabecera;

