import styled from 'styled-components'

const Container = styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const Name = styled.span`
    font-size:13px;
    font-weight:500px;
    color:${({ theme }) => theme.text};
`
const Date = styled.span`
font-size:12px;
font-weight:400px;
color:${({ theme }) => theme.textSoft};
margin-left:5px;

`
const Text = styled.span`
font-size:14px;
color:${({ theme }) => theme.text};
`
export default function Comments() {
    return (
        <Container>
            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg' />
            <Details>
                <Name>
                    Sher Muhamamd <Date>1 day ago</Date>
                </Name>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse facilis rerum temporibus quo optio, nulla ab nisi recusandae nemo ratione voluptatem perferendis ex quam. Facilis numquam explicabo fugiat non.
                </Text>
            </Details>
        </Container>
    )
}
