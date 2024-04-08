import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format as formatTimeAgo } from 'timeago.js/esm';

import { useEffect, useState } from 'react';
import axios from 'axios';



const Container = styled.div`
width:${(props) => props.type !== "sm" && "360px"};
margin-bottom:${(props) => props.type === "sm" ? "10px" : "45px"};
cursor:pointer;
display:${(props) => props.type === "sm" && "flex"};
gap:10px;
`
const Image = styled.img`
width:100%;
height:${(props) => props.type === "sm" ? "120px" : "202px"};
background-color:#999;
flex:1;
`
const Details = styled.div`
display:flex;
margin-top:${(props) => props.type !== "sm" && "16px"};
gap:12px;
flex:1;
`
const ChannelImage = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
display:${(props) => props.type === "sm" && "none"}
`
const Texts = styled.div`

`
const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({ theme }) => theme.text};

`
const ChannelName = styled.h2`
font-size:14px;
color:${({ theme }) => theme.textSoft};
margin:10px 0px;

`
const Info = styled.div`
font-size:14px;
color:${({ theme }) => theme.textSoft};

`


export default function VideoCards({ type, video }) {

  const [channel, setChannel] = useState([])

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/users/find/${video.userId}`);
        // console.log(res.data, "===>>> response");
        setChannel(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.username}</ChannelName>
            <Info>{video.views} views * {video.createdAt && formatTimeAgo(video?.createdAt)}
              {/* npm i timeago.js */}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

VideoCards.propTypes = {
  type: PropTypes.string, // Make the type prop optional
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
    // Add more properties if necessary
  }).isRequired
};

// {/* <Link to="/video/test" style={{ textDecoration: "none" }}>
//       <Container type={type}>
//         <Image type={type} src={video.imgUrl} />
//         <Details type={type}>
//           <ChannelImage type={type} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg' />
//           <Texts>
//             <Title>{video.title}</Title>
//             <ChannelName>SM Coding</ChannelName>
//             <Info>{video.views} views * {timeAgoString}
//               {/* npm i timeago.js */}
//             </Info>
//           </Texts>
//         </Details>
//       </Container>
//     </Link> */}