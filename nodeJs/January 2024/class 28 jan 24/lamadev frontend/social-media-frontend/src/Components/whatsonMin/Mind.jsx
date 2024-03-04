// import { TextFields } from '@mui/icons-material'
import React from 'react'
import BasicTextFields from './Input/BasicTextComponent'
import ImageAvatars from './Profile/Profile'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { WhatsonMin } from './Profile/Profile';


export default function Mind() {
    return (
        <Paper elevation={8} >
            <div className='w-196 flex flex-col items-start gap-10 shadow-lg p-4 rounded text-xs'>
                <div className='flex items-center justify-center gap-8'>
                    <div><WhatsonMin /></div>
                    <div><BasicTextFields /></div>
                </div>
                <div className='flex gap-3'>
                    <div><span className='text-red-600'><PhotoLibraryIcon /></span> Photos or Videos</div>
                    <div><span className='text-blue-700'><LabelIcon /> </span> Tag</div>
                    <div><span className='text-green-600'><LocationOnIcon /></span> Location</div>
                    <div><span className='text-yellow-500'><EmojiEmotionsIcon /></span> Feelings</div>
                    <div className='text-xs' ><Button variant="contained">Share</Button></div>
                </div>
            </div>
        </Paper>
    )
}
