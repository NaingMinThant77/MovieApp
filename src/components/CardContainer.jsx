import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardContainer = ({ title, url }) => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
        console.log(data.results)
    }

    return (
        <section className='px-10 my-10'>
            <h1 className='text-3xl text-mono font-bold text-white'>{title}</h1>
            <div className='grid grid-cols-10 gap-3 mt-4'>
                {
                    popularMovies.length && popularMovies.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </section>
    )
}

export default CardContainer