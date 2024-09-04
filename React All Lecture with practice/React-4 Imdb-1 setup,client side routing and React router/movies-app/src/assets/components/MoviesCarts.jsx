import React from 'react'

const MoviesCarts = ({currentMovie , uniqueKey}) => {
  return (
    <div key={uniqueKey}
    className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 transition-transform duration-700 cursor-pointer flex flex-col justify-end relative"
    style={{
      backgroundImage : `url(https://image.tmdb.org/t/p/original${currentMovie.poster_path})`
    }}
>
    {/* lets take the one div to add the heart emoji */}
    <div className='m-4 flex justify-center h-8 w-8 items-center rounded-g bg-gray-900/60 absolute top-0 left-32'>
      ❤
    </div>
    <div className='text-red-50 p-2 text-center bg-gray-700'
    >
      {currentMovie.title}
    </div>
</div>
  )
}

export default MoviesCarts