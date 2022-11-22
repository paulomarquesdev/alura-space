import './style.scss';
import Tags from './Tags';
import { Card } from './Card';
import photos from './photos.json';

export function Gallery() {
    return (
        <section className='gallery'>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className='cards__list'>
                {photos.map((photoItem) => {
                    return (
                        <Card key={photoItem.id} photo={photoItem}/>
                    )
                })}
            </ul>
        </section>
    )
}