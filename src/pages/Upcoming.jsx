import React from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

const Upcoming = () => {
    return (
        <>
            <Header />
            <CardContainer title={"Upcoming Movie"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=71b13df9e6efa6a339c22d4ef5681e9b&language=en-US"} />
        </>
    )
}

export default Upcoming