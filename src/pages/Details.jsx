import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const Details = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getMovie();
    }, [id])

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=71b13df9e6efa6a339c22d4ef5681e9b&language=en-US`);
        const data = await response.json();
        setMovie(data);
        console.log(data)
    }

    return (
        <section>
            {
                movie && (
                    <section className='w-full h-screen'>
                        <div className='h-2/3 relative'>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover' />
                            <div className='dark-ov'></div>
                        </div>
                        <div className='detail-container'>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='w-52' />
                            <div className='ms-4 text-white'>
                                <h1 className='text-4xl font-semibold'>{movie.original_title}</h1>
                                <p className='text-lg mb-2'><span className='text-red-500 font-medium'>Release On: </span>{movie.release_date}</p>
                                <p className='text-lg mb-2'><span className='text-red-500 font-medium'>Runtime : </span>{movie.runtime}min</p>
                                {
                                    movie.genres && movie.genres.map(g => {
                                        return <span key={g.id} className='bg-red-500 px-2 py-2 rounded-md font-bold me-1 my-1'> {g.name}</span>
                                    })

                                }
                                <h2 className='text-lg my-5'>{movie.overview}</h2>
                                <Link to={movie.homepage} className=' font-bold text-lg rounded-md px-3 py-2 border-2 border-red-500 me-2 mt-2 '>
                                    <PlayCircleIcon className='w-6 h-6 text-red-500 inline-block' />
                                    Watch Now</Link>
                            </div>
                        </div>
                    </section>
                )
            }
        </section>
    )
}

export default Details