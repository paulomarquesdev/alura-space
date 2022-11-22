import './style.scss';
import { Card } from './Card';
import photos from './photos.json';

export function Aside() {
    return (
        <section className='aside'>
            <h2>Populares</h2>
            <ul className='common__list'>
                {photos.map((photoItem) => {
                    return (
                        <Card key={photoItem.id} imgPath="" />
                    )
                })}
            </ul>
        </section>
    );
}