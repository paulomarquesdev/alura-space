import './style.scss';

export default function Tags() {
  return (
    <div className='tags'>
        <p>Filtre por tags:</p>
        <ul className='tags__list'>
            <li className='tags__items'>Estrelas</li>
            <li className='tags__items'>Galáxias</li>
            <li className='tags__items'>Lua</li>
            <li className='tags__items'>Planetas</li>
        </ul>
    </div>
  )
}
