import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ singleUser }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={singleUser?.username} src={singleUser?.profilePicture} />
        </Stack>
    );
}
export function PostProfilePic({ singlePost }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={singlePost?.username} src={singlePost?.image} />
        </Stack>
    );
}
export function WhatsonMin({ singlePost, userProfilePic }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={singlePost?.username} src={userProfilePic?.profilePicture} />
        </Stack>
    );
}
