import React, { useEffect, useState } from 'react'


const Watchlist = () => {

  // !I will take the one state to store the watchlist 
  const [watchlistData , setWatchlistData] = useState([]);

  // !then I will use the useEffect hook with empty array as the dependancy to fetch the all details form the local storage at the first rendering itself 

  useEffect(()=> {
    const favMovieData = JSON.parse(localStorage.getItem("watchlistArray"));

    if(favMovieData){
      //means user liks or dislikes some data is present so show that 
      setWatchlistData(favMovieData);

    }


  } , [])

  // const addToWatchList
  return (
<div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
  <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
    <thead>
      <tr className='bg-gray-50'>
        <th className='px-6 py-4 font-medium text-gray-900'>Name</th>
        <th className='px-6 py-4 font-medium text-gray-900'>Ratings</th>
        <th className='px-6 py-4 font-medium text-gray-900'>Popularity</th>
        <th className='px-6 py-4 font-medium text-gray-900'>Genre</th>
      </tr>
    </thead>

    <tbody>
      {watchlistData.map((currentFavMovie, index) => (
        <tr key={index} className="hover:bg-gray-50 transition-all">
          <td className='px-6 py-4 flex items-center space-x-4'>
            <img
              className="w-12 h-18 rounded-md shadow-md"
              src={`https://image.tmdb.org/t/p/original${currentFavMovie.poster_path}`}
              alt={currentFavMovie.title}
            />
            <div className="text-gray-900 font-semibold">{currentFavMovie.title}</div>
          </td>
          <td className='px-6 py-4 text-gray-700'>{currentFavMovie.vote_average}</td>
          <td className='px-6 py-4 text-gray-700'>{currentFavMovie.popularity}</td>
          <td className='px-6 py-4 text-gray-700'>{currentFavMovie.genre_ids}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Watchlist