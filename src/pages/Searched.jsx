import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "../components/Card";

const Searched = () => {
    const { title } = useParams();
    const [searchedMovie, setSearchMovie] = useState("");

    useEffect(() => {
        getSearchMovie();
    }, [title])

    const getSearchMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=71b13df9e6efa6a339c22d4ef5681e9b&language=en-US&query=${title}&page=1&include_adult=false`);
        const data = await response.json();
        setSearchMovie(data.results);
        // console.log(data)
    }

    return (
        <section className='px-10 my-10'>
            <h1 className='text-3xl text-mono font-bold text-white'>Search Results For "{title}"</h1>
            <div className='grid grid-cols-10 gap-3 mt-4'>
                {
                    searchedMovie.length && searchedMovie.map(movie => {
                        return (
                            <Card key={movie.id} movie={movie} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Searched