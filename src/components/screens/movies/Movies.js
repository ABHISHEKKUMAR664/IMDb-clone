import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../common/card/Card';

const Movies = () => {
    const[moviedData,setMoviesData]=useState();
    useEffect( () => {
        getMoviesTitle();
    })

    const getMoviesTitle = () => {
        axios.get("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre",{
           headers:{"x-rapidapi-key": "fead5a4f9emshc048677dca48d40p144198jsn12ee6ccd1dd3",
           "x-rapidapi-host": "imdb8.p.rapidapi.com",
           "useQueryString": true},
           params:{"genre": "/chart/popular/genre/adventure"}

        } )
        .then((response) =>{setMoviesData(response.data)})
        .fetch( (error) => console.log(error))
    }
    return (
        <div className="movies">

            {Array(20).fill().map((item,index) => {
                <Card imageUrl="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" title={moviedData[index]} year="2010" rating="121"/>
            })}
           
           
        </div>
    )
}

export default Movies;

