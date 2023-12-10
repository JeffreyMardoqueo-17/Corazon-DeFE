import React from 'react';

function Cantos({ imageUrl, title, description, videoUrl }) {
    return (
        <div className='container'>
            <div className="card bg-dark border-3" style={{ width: '18rem' }}>
                <img src={imageUrl} className="card-img-top p-2 " alt="Imagen del sencillo" />
                <div className="card-body">
                    <h5 className="card-title text-white font-weight-bold">{title}</h5>
                    <p className="card-text text-white">{description}</p>
                    <a href={videoUrl} className="btn btn-primary">Ver video</a>
                </div>
            </div>
        </div>
    );
}

export default Cantos;
