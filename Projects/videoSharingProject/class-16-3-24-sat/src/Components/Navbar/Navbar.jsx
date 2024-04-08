import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { VideoCallOutlined } from "@mui/icons-material";


const Container = styled.div`
position:sticky;
top:0px;
background-color:${({ theme }) => theme.bgLighter};
height:56px;
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
height:100%;
padding:0px 20px;
position:relative;
`
const Search = styled.div`
position:absolute;
left:0px;
right:0px;
margin:auto;
border:1px solid #ccc;
width:40%;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:3px;
padding:5px;
color:${({ theme }) => theme.text};

`
const Input = styled.input`
width:100%;
padding:5px;
border:none;
outline:none;
background-color:transparent;
color:${({ theme }) => theme.text};
`
const Button = styled.button`
display:flex;
align-items:center;
padding:5px 15px;
background-color:transparent;
border:1px solid aqua;
color:aqua;
border-radus:2px;
font-weight:500;
cursor:pointer;
`
const User = styled.div`
display:flex;
aling-items:center;
gap:10px;
font-weight:500;
color:${({theme})=> theme.text}
`
const Avatar = styled.img`
width:32px;
height:32px;
border-radius:50%;
background-color:#999;
`

export default function Navbar() {
    const { user } = useSelector(state => state.user)
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" />
                    <SearchIcon style={{ cursor: "pointer" }} />
                </Search>
                {user ? (
                    <User>
                        <VideoCallOutlined/>
                        <Avatar src={user?.img} alt={user.username[0]}/>
                        {user?.username}
                    </User>
                ) : <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        SIGNIN
                    </Button>
                </Link>}
            </Wrapper>
        </Container>
    )
}
