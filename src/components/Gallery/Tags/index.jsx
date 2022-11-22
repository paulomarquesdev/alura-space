import './style.scss';

export default function Tags({ tags, photosFilter, revertFilter }) {
  return (
    <div className='tags'>
        <p>Filtre por tags:</p>
        <ul className='tags__list'>
            {tags.map((item) => {
                console.log()
                return (
                    <li key={item} onClick={()=>photosFilter(item)} onDoubleClick={()=>revertFilter()} className='tags__items'>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}
