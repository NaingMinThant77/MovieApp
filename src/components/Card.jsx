import { PlayCircleIcon } from '@heroicons/react/24/solid'
const Card = ({ movie }) => {
    return (
        <div className='rounded-lg overflow-hidden relative'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='w-full object-cover' />
            <div className='dark-ov'></div>
            <PlayCircleIcon className='playic' />
        </div>
    )
}

export default Card