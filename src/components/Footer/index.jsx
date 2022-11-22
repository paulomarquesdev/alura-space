import fbImg from '../../assets/images/facebook.svg';
import twImg from '../../assets/images/twitter.svg';
import igImg from '../../assets/images/instagram.svg';
import './style.scss';

export function Footer() {
    return (
        <footer>
            <ul className="social__list">
                <li className="social__item">
                    <a href="/" target="_blank" className="social__link">
                        <img className="social_icons" src={fbImg} alt="ícone do facebook" />
                    </a>
                </li>
                <li className="social__item">
                    <a href="/" target="_blank" className="social__link">
                        <img className="social_icons" src={twImg} alt="ícone do twitter" />
                    </a>
                </li>
                <li className="social__item">
                    <a href="/" target="_blank" className="social__link">
                        <img className="social_icons" src={igImg} alt="ícone do instagram" />
                    </a>
                </li>
            </ul>
            <p className="by">Desenvolvido por <a href="https://github.com/paulomarquesdev/">Paulo Marques Dev.</a></p>
        </footer>
    )
}