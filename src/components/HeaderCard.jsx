import { PlayCircleIcon } from '@heroicons/react/24/solid'

const HeaderCard = ({ movie }) => {
    return (
        <div className='w-full h-screen relative'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='w-full h-full object-cover' />
            <div className='dark-ov'></div>
            <div className='text-box'>
                <h1 className='text-5xl py-4 font-extra-bold'>{movie.title}</h1>
                <p className='text-lg font-medium'>{movie.
                    overview
                }</p>
                <button className='bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-3'>
                    <PlayCircleIcon className='w-6 h-6 inline-block m-0 me-2' />
                    Watch Now</button>
            </div>
        </div>
    )
}

export default HeaderCard