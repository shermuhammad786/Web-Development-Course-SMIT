import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Comments from './Comments';
import { useSelector } from "react-redux"

const Container = styled.div`

`
const NewComments = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const Input = styled.input`
border:none;
border-bottom:1px solid ${({ theme }) => theme.soft};
background-color:transparent;
outline:none;
padding:15px;
width:100%;
color:${({ theme }) => theme.text}
`
export default function NewComment({ videoId }) {

    const { user } = useSelector((state) => state.user);
    const [comments, setComments] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:9000/api/comments/${videoId}`, { withCredentials: true })
                console.log(res.data, "comments ")
                setComments(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchComments()
    }, [videoId])
    console.log(comments, "===>>>>>  comment")
    return (
        <Container>
            <NewComments>
                <Avatar src={user.img} />
                <Input placeholder='Add a comment....' />
            </NewComments>
            {comments?.map(comment =>
                <Comments key={comment._id} comment={comment} />
            )}
        </Container>
    )
}
NewComment.propTypes = {
    videoId: PropTypes.string.isRequired
}