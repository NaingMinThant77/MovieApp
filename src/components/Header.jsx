import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';
import { useEffect, useState } from 'react';

const Header = () => {
    const [relatedMovies, setRelatedMovies] = useState([]);

    useEffect(() => {
        getRelatedMovies();
    }, [])

    const getRelatedMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=71b13df9e6efa6a339c22d4ef5681e9b&language=en-US");
        const data = await response.json();
        setRelatedMovies(data.results);
        // console.log(data.results)
    }

    return (
        <section className=''>
            <Splide options={{
                type: "loop", arrows: false, autoplay: true, interval: 2000
            }}>
                {
                    relatedMovies.map(movie => {
                        return (
                            <SplideSlide key={movie.id}>
                                <HeaderCard movie={movie} ></HeaderCard>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </section>
    )
}

export default Header