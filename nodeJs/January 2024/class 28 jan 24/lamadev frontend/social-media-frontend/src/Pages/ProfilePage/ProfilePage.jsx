import React from 'react'
// import HomePage from '../HomePage/HomePage'
import Navbar from '../HomePage/navabr/Navbar'
import Sidebar from '../HomePage/LeftSide/Sidebar'
import Center from '../HomePage/Center/Center'
import RightBar from '../HomePage/RightBar/RightBar'
import ProfilePageRightBar from '../../Components/ProfilePageRightBar'
// import { ProfilePageCoverImage } from '../../Components/whatsonMin/Profile/Profile'

export default function ProfilePage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex justify-between'>
                <div className='w-2/12'>
                    <Sidebar />
                </div>



                <div>
                    <div>
                        <div className='h-96 relative rounded' style={{ backgroundImage: `url(../assests/post4.jpeg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div style={{ bottom: "-15%", left: "40%", }} className='absolute bottom-0'>
                                <img className='h-52' width={"200px"} src="assests/sherimg.jpg" alt="" style={{ borderRadius: "50%" }} />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around mt-32'>
                        <div className='w-2/5'>
                            <Center />
                        </div>

                        <div className='w-4/12'>
                            {/* <RightBar /> */}
                            <ProfilePageRightBar />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
