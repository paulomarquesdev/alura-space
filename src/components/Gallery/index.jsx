import './style.scss';
import Tags from './Tags';
import { Card } from './Card';
import photos from './photos.json';
import { useState } from 'react';

export function Gallery() {
    const [ items, setItems ] = useState(photos);
    const tagsList = [...new Set(items.map((value) => value.tag))];

    function photosFilter(tag) {
        const newPhotos = photos.filter((photo) => {
            return photo.tag === tag;
        });
        setItems(newPhotos);
    };

    function revertFilter() {
        setItems(photos)
    }

    return (
        <section className='gallery'>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tagsList} photosFilter={photosFilter} revertFilter={revertFilter} />
            <ul className='cards__list'>
                {items.map((item) => {
                    return (
                        <Card key={item.id} photo={item}/>
                    )
                })}
            </ul>
        </section>
    )
}