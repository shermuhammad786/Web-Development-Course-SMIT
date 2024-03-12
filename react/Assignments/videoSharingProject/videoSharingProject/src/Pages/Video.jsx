
import styled from 'styled-components'
import NewComment from '../Components/Comments/NewComment'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../Components/Comments/Comments';
import VideoCards from '../Components/VideoCards/VideoCards';
import { useEffect } from 'react';



const Container = styled.div`
display:flex;
gap:24px;
`
const Content = styled.div`
flex:5;
`

const VideoWrapper = styled.div``
// const DisplayVideo = styled.video`

// `
const Title = styled.h1`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({ theme }) => theme.text};  
`
const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

`
const Info = styled.span`
color:${({ theme }) => theme.text};

`
const Buttons = styled.div`
display:flex;
gap:20px;
color:${({ theme }) => theme.text};
`
const Button = styled.button`
display:flex;
align-items:center;
gap:5px;
cursor:pointer;
background-color:transparent;
color:${({ theme }) => theme.text};
border:none;
`
const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid gray;
`
const Channel = styled.div`
display:flex;
justify-content:space-between
`

const ChannelInfo = styled.div`
    display:flex;
    gap:20px;
`

const ChannelImage = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const ChannelDetails = styled.div`
display:flex;
flex-direction:column;
color:${({ theme }) => theme.text};
`
const ChannelName = styled.span`
    font-size:500;
`
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:10px;
color:${({ theme }) => theme.text};
font-size:12px
`
const Description = styled.p`
font-size:14px;

`

const Subscribe = styled.button`
background-color:#cc1a00;
font-weight:500;
color:white;
border:none;
border-radus:3px;
height:max-content;
padding:10px 20px;
cursor:pointer;
`

const Recommendation = styled.div`
flex:2;
`

export default function Video() {
  useEffect(() => {
    document.title="video"
  }, [])
  return (
    <Container>
      <Content>
        <VideoWrapper>

          <iframe width="100%" height="720" src="https://www.youtube.com/embed/YVFcoZIZdys" title="Qalme Quran Me Sain Tuhnjo Nalo By Muhammad Shoaib Hussaini New Sindhi Naat 2019(2)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </VideoWrapper>
        <Title>test video</Title>
        <Details>
          <Info>660,908 views * 1 day ago</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon />120</Button>
            <Button><ThumbDownOutlinedIcon />Dislike</Button>
            <Button><ReplyOutlinedIcon />Share</Button>
            <Button><AddTaskOutlinedIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg' />
            <ChannelDetails>
              <ChannelName>My Channel Name</ChannelName>
              <ChannelCounter>200K subcribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facere illo obcaecati quidem repellat tempore perspiciatis ipsum, eligendi velit voluptas, delectus est animi sunt distinctio enim error expedita. Quasi, delectus?
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subcribe</Subscribe>
        </Channel>
        <Hr />
        <NewComment />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </Content>
      <Recommendation>
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
        <VideoCards type={"sm"} />
      </Recommendation>
    </Container>
  )
}
