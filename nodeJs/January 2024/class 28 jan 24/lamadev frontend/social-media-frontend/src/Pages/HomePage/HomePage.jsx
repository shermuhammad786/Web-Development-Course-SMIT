import React from 'react'
import Navbar from './navabr/Navbar'
import Sidebar from './LeftSide/Sidebar'
import Center from './Center/Center'
import RightBar from './RightBar/RightBar'
export default function HomePage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex justify-between mt-8'>
                <div className='w-2/12'>
                    <Sidebar />
                </div>

                <div className='w-2/5'>
                    <Center />
                </div>

                <div className='w-4/12'>
                    <RightBar />
                </div>
            </div>
        </>
    )
}
