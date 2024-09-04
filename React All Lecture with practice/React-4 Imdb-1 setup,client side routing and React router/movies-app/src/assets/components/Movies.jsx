import React, { useEffect, useState } from "react";
import movieImage from "/images/movie image.webp";
import MoviesCarts from "./MoviesCarts";
import Pagination from "./Pagination";
import axios from "axios";

const Movies = () => {
  // !lets take the one more state for the pagination That  I have to implement
  const [pageNo, setPageNo] = useState(1);

  // lets create the two function to go to the next page and previous page
  let handleNext = () => {
    setPageNo(pageNo + 1);
  };

  let handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  // In this second class of the IMDB we will use use the static data so I will be using useState() hook here
  // !I will create the one state to store the movies

  let [movies, setMovies] = useState([
    {
      url: `${movieImage}`,
      title: "Movie 1",
    },
    {
      url: `${movieImage}`,
      title: "Movie 1",
    },
    {
      url: `${movieImage}`,
      title: "Movie 1",
    },
    {
      url: `${movieImage}`,
      title: "Movie 1",
    },
    {
      url: `${movieImage}`,
      title: "Movie 1",
    },
  ]);



  // !Now I want to add the movies dynamically so here again I will make the api call optimization can be done using the lifting up the state 

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=39b6e395d9e668e23e0c51b81f844ad1&language=en-US&page=${pageNo}`)    //^using the page name as the query param to implement the pagination
    .then((convertedResponse) => {
      console.log("convertedResponse from Movies Componenet");
      
      console.log(convertedResponse);

      // !now set the actual data to the movies 
      setMovies(convertedResponse.data.results)       

      
    })
  } , [pageNo])

  return (
    <div>
      {/* to just display the text as the trending movies  */}
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

      {/* Now I have to take the one more div that will return the each trending movie with its name and poster  */}

      <div className="flex justify-evenly  flex-wrap gap-8">
        {
          // !I have to iterate over the movies state having the array of objects details of the each movie

          movies.map((currentMovie, currentIndex) => {
            // &it should return the jsx that will be each time new cart having movioe image and its name

            return <MoviesCarts currentMovie={currentMovie} uniqueKey={currentIndex}/>;
          })
        }
      </div>

      {/*  taking the div to implement the pagination in the UI*/}
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrevious={handlePrevious}/>

    </div>
  );
};

export default Movies;
