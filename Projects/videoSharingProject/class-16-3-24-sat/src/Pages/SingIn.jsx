import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice"
import { useDispatch } from 'react-redux'
import { auth, provider } from "../fireabseConfig.js"
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';
// import { Token } from "@mui/icons-material"
import jwt from "jsonwebtoken";


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height: calc(100vh - 56px);
color:${({ theme }) => theme.text};
`
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
background-color:${({ theme }) => theme.bgLighter};
border:1px solid ${({ theme }) => theme.soft};
padding:20px 80px;
gap:10px;
`
const Title = styled.h1`
font-size:24px

`
const SubTitle = styled.h2`
font-size:20px;
font-weight:300;
`
const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft};
border-radius:3px;
padding:10px;
background-color:transparent;
color:${({ theme }) => theme.text};
width:130%;
`
const Button = styled.button`
border-radus:3px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer;
background-color:${({ theme }) => theme.soft};
color:${({ theme }) => theme.textSoft};

`
const More = styled.div`
display:flex;
margin-top:10px;
font-size:12px;
color:${({ theme }) => theme.TextSoft};
`
const Links = styled.div`
margin-left:50px;
`
const Link = styled.span`
margin-left:30px;
`


export default function SingIn() {
    const cookie = new Cookies()
    useEffect(() => {
        document.title = "SignIn"
    }, [])
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const dispatch = useDispatch()
    console.log(email)

    const signinHandler = async () => {
        dispatch(loginStart())
        // const token = jwt.sign
        try {
            const res = await axios.post("http://localhost:9000/api/auth/singin/", { username, password })
            // const cookieSet = await axios.get("http://localhost:9000/api/auth/setcookie")
            // console.log(cookieSet , "cookie set")
            dispatch(loginSuccess(res.data))
            const token = jwt.sign({ id: res.data._id })
            // const token = Date.now()
            cookie.set("access_token", token)
            console.log(res.data, "===>>> data")
        } catch (error) {
            console.log(error)
            dispatch(loginFailure())
        }
    }
    const signInwithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result, "===>>>> result")
                axios.post("http://localhost:9000/api/auth/google", {
                    username: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                }).then((res) => {
                    // const token = Date.now()
                    // cookies.set("access_token", `30892hf${token}23894yutr9hiOR`)
                    dispatch(loginSuccess(res.data))
                })
            }).catch((error) => {
                console.log(error)
                dispatch(loginFailure())
            })

    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <SubTitle>to continue mytube</SubTitle>
                <Input placeholder="username" onChange={e => setName(e.target.value)} />
                <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <Button onClick={signinHandler}>SING IN </Button>
                <Title>OR</Title>
                <Button onClick={signInwithGoogle}>Signin with google</Button>
                <Title>OR</Title>
                <Input placeholder="username" onChange={e => setName(e.target.value)} />
                <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <Button>SING UP</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}
