import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
const Card = ({ movie }) => {
    return (
        <Link to={`/details/${movie.id}`} className='rounded-lg overflow-hidden relative'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='w-full object-cover' />
            <div className='dark-ov'></div>
            <PlayCircleIcon className='playic' />
        </Link>
    )
}

export default Card