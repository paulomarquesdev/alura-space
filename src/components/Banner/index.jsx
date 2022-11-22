import './style.scss';
import bannerImg from '../../assets/images/banner.png'

export function Banner() {
    return (
        <div className='banner'>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img src={bannerImg} alt='Imagem da terra vista do espaço' />
        </div>
    )
}