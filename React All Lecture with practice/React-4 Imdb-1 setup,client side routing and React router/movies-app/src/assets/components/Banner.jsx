import React from 'react'
import poster1 from '/images/bhool bhulaya poster.jpg'
import naturePoster from '/images/nature banner.jpg'
import suryavanshiPoster from '/images/suryavanshi.jpg'

const Banner = () => {
  return (
    <div
        className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end my-12'

        // Now adding the inline css property 
        style={{
            // backgroundColor: "red"
            backgroundImage : `url(${suryavanshiPoster})`,
            backgroundSize: 'cover', // Optional: Adjusts the size of the background image
            backgroundPosition: 'center', // Optional: Centers the background image
        }}
    >
        <div
                className='text-white w-full text-center text-2xl'
        >
            Placeholder Movie
        </div>
    </div>
  )
}

export default Banner