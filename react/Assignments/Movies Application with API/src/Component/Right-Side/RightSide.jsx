import React, { useState } from 'react'
import { ClickedMove } from './ClickedMovie'

export default function RightSide({ singleMovieID, clickedMovieApi }) {
    // console.log(singleMovieID, "single Movie id right side")


    return (
        <ClickedMove clickedMovieApi={clickedMovieApi} />
        // <section className="bg-[#0f3460] w-1/2 p-4 rounded-lg">
        //     <h2 className="text-white text-lg font-semibold">MOVIES YOU WATCHED</h2>
        //     <div className="flex items-center justify-between mt-4">
        //         <div className="flex items-center space-x-2">
        //             <FilmIcon className="text-white w-5 h-5" />
        //             <span className="text-white">0 movies</span>
        //         </div>
        //         <div className="flex items-center space-x-2">
        //             <StarIcon className="text-white w-5 h-5" />
        //             <span className="text-white">0.0</span>
        //         </div>
        //         <div className="flex items-center space-x-2">
        //             <ClockIcon className="text-white w-5 h-5" />
        //             <span className="text-white">0 min</span>
        //         </div>
        //     </div>
        // </section>
    )
}

// const ClickedMovi = () => {
//     return (
//         // <ClickedMovie />
//         // <section className="bg-[#0f3460] w-1/2 rounded-lg  text-white">
//         //     <div className='d-flex justify-between'>
//         //         <div className='w-40'>
//         //             <img width={"100%"} src="data:image/jpeg;base64,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" alt="" />
//         //         </div>
//         //         <div className='d-flex flex-col justify-evenly text-left'>
//         //             <h2>Moive name</h2>
//         //             <p>date . movie time</p>
//         //             <p>action  , adventure , sci-fu</p>
//         //             <p className='d-flex'><StarIcon /> 8.8 imbd rating</p>
//         //         </div>
//         //     </div>
//         //     <div className='d-flex flex-col justify-evenly items-center h-80'>
//         //         <div className='d-flex'><StarIcon /> &nbsp;&nbsp;<StarIcon />&nbsp;&nbsp; <StarIcon /> <StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
//         //         <div><p>theory about film</p></div>
//         //         <div><p>starings</p></div>
//         //         <div>Directed by</div>
//         //     </div>
//         // </section>
//     )
// }


