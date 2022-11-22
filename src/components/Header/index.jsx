import logoImg from '../../assets/images/logo.png';
import searchImg from '../../assets/images/search.png';
import './style.scss';

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="Logo do Alura Space" />
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={searchImg} alt="ícone de lupa" />
            </div>
        </header>
    );
}