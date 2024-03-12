import { useEffect } from "react"
import styled from "styled-components"

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
    useEffect(() => {
        document.title="SignIn"
      }, [])
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <SubTitle>to continue mytube</SubTitle>
                <Input placeholder="username" />
                <Input type="password" placeholder="password" />
                <Button>SING IN </Button>
                <Title>OR</Title>
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input type="password" placeholder="password" />
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
