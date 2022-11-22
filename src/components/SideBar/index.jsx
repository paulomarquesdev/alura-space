import './style.scss';
import inicioImg from '../../assets/icons/home-ativo.png';
import maisVistasImg from '../../assets/icons/mais-vistas-inativo.png';
import maisCurtidasImg from '../../assets/icons/mais-curtidas-inativo.png';
import novasImg from '../../assets/icons/novas-inativo.png';
import surpreendaMeImg from '../../assets/icons/surpreenda-me-inativo.png';

export function SideBar() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={inicioImg} alt='' />
                    <a href="/">Ínicio</a>
                </li>
                <li>
                    <img src={maisVistasImg} alt='' />
                    <a href="/">Mais vistas</a>
                </li>
                <li>
                    <img src={maisCurtidasImg} alt='' />
                    <a href="/">Mais curtidas</a>
                </li>
                <li>
                    <img src={novasImg} alt='' />
                    <a href="/">Novas</a>
                </li>
                <li>
                    <img src={surpreendaMeImg} alt='' />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}