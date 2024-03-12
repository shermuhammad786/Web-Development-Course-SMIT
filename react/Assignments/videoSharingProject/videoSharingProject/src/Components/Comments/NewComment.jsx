import styled from 'styled-components'

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
export default function NewComment() {
    return (
        <Container>
            <NewComments>
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg' />
                <Input placeholder='Add a comment....' />
            </NewComments>
        </Container>
    )
}
