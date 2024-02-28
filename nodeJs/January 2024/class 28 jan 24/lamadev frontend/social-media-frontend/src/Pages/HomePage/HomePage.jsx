import React from 'react'
import Navbar from './navabr/Navbar'
import Sidebar from './sidebar/Sidebar'
export default function HomePage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
        </>
    )
}
