import openImg from '../../assets/images/open.png';
import favoriteImg from '../../assets/images/favorito.png';
import fotoImg from '../../assets/images/galeria/foto-1.png';
import './style.scss';
import React from 'react';

export function Card({ photo }) {
    return (
        <li className="cards__item">
            <img className="card__image" src={fotoImg} alt="foto" />
            <p className='card__description'>{photo.titulo}</p>
            <div className='credits'>
                <p className='card__description_credits'>{photo.creditos}</p>
                <span>
                    <img className="img__credits" src={favoriteImg} alt="ícone coração de curtir" />
                    <img className="img__credits" src={openImg} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    );        
}