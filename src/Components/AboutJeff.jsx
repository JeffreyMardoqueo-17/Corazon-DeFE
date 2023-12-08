import React from 'react';
import st from './AboutJeff.module.css'
const AboutJeff = () => {
    return (
        <div className = {st.about}>
            <div className= {st.content}>
                <img src="/IMG/perfilJEFF.jpg" alt="FOTO DEL JEFF" />
                <div className=  {st.text}>
                    <h2>SObre Jeff</h2>
                    <h5>SOY JEFFREY MARDOQUEO</h5>
                    <p>KSDJNKJSDNKJSNDKNSDSDKNSKJDNSKDJSD
                        SKDNKSJDNKSJDNKSDKJSNDKJSNDKNSDKNSDK
                        SDKJNSDKJNSDKSD
                        SDNSDJNKSDNJSDSDSDKJSNKDJNSKDNKSDN
                        SKDNSKJDNKSDJ
                    </p>
                    <button type='button' className=  {st.Boton}>LEER MAS</button>
                </div>
            </div>
        </div>
    );
}

export default AboutJeff;
