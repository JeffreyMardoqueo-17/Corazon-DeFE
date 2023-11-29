import React from 'react';
import 'bootstrap';
import sty from './Carrusel.module.css';

export const Carrusel = () => {
    return (
        <div className={sty.slider}>
            <ul>
                <li>
                    <img src='/IMG/viandoalcielo.jpeg' alt="viando al cielo" />
                </li>
                <li>
                    <img src="/IMG/paradoviendoalFrente.jpeg" alt="paradoviendoalFrente" />
                </li>
                <li>
                    <img src="/IMG/rocaaa.jpeg" alt="rocaaa" />
                </li>
                <li>
                    <img src="/IMG/pajarooo.jpeg" alt="pajarooo" />
                </li>
            </ul>
        </div>
    );
};
