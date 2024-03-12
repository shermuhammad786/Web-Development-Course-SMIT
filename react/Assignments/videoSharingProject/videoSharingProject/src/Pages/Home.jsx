
import styled from 'styled-components'
import VideoCards from '../Components/VideoCards/VideoCards'

const Container = styled.div`
display:flex;
justify-content:center;
margin-top:25px
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:52px;
`
export default function Home() {

    return (
        <Container>
            <Wrapper>
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
                <VideoCards />
            </Wrapper>
        </Container>
    )
}