import React from 'react'
import CardContainer from '../components/CardContainer'
import Header from '../components/Header'

const Popular = () => {
    return (
        <>
            <Header />
            <CardContainer title={"Popular Now"}
                url={"https://api.themoviedb.org/3/movie/popular?api_key=71b13df9e6efa6a339c22d4ef5681e9b&language=en-US"} />
        </>
    )
}

export default Popular