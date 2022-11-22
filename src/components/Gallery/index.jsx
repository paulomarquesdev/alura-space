import { Card } from '../Card';
import Tags from '../Tags';
import './style.scss';

export function Gallery() {
    return (
        <section className='gallery'>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className='cards__list'>
                <Card />
            </ul>
        </section>
    )
}