import React from 'react';
import 'bootstrap';
import sty from './Carrusel.module.css';

export const Carrusel = () => {
    return (
        <div className={sty.slider}>
            <ul>
                <li>
                    <img src='/IMG/bacgg.jpg' alt="Image 1" />
                </li>
                <li>
                    <img src="/IMG/KSJDSD.webp" alt="Image 2" />
                </li>
                <li>
                    <img src="/IMG/KSJDSD.webp" alt="Image 3" />
                </li>
                <li>
                    <img src="/IMG/fondos.jpg" alt="Image 4" />
                </li>
            </ul>
        </div>
    );
};
