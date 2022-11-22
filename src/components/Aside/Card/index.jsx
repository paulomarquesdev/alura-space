import './style.scss';
import fotoImg from '../../../assets/images/populares/foto-1.png';

export function Card({ imgPath}) {
    return (
        <li className='common__item'>
            <img className='common__img' src={fotoImg} alt="" />
        </li>
    )
}