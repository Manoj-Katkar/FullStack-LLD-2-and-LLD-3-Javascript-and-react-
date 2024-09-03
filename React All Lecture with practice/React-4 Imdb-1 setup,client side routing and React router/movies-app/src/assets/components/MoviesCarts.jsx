import React from 'react'

const MoviesCarts = ({currentMovie}) => {
  return (
    <div
    className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 transition-transform duration-700 cursor-pointer flex flex-col justify-end"
    style={{
      backgroundImage : `url(${currentMovie.url})`
    }}
>

    <div className='text-red-50 p-2 text-center bg-gray-700'
    >
      {currentMovie.title}
    </div>
</div>
  )
}

export default MoviesCarts