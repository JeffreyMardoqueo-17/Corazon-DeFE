import React from 'react'
//Seccion del menu, de sobre nosotro 
import st from './SobreNosotros.module.css'
function SobreNosotros() {
    return (
        <div className={st.SobreNosotros}>
            {/* parte de la izquierda */}
            <div className={st.Izquierda}>
                <img src="/IMG/viandoalcielo.jpeg" alt="Viendo al cielo" srcset="" />
            </div>
            {/* Parte de la derecha */}
            <div className={st.derecha}>
                <h2>Sobre Nosotros</h2>
                <hr></hr>
                <p>SLKDNSDNSDLSDLSDMLKMSDLSD SD
                    SDKJNSDLKMSDLKLSKD SD
                    SKDJNSLDNLKSD 
                    SDKNSDLKMSDLK
                </p>
            </div>
        </div>
    )
}

export default SobreNosotros