import './App.css'
import Navbar from './Components/Navbar/Navbar'
import styled from "styled-components"
import { darkTheme, lightTheme } from './Components/Dark_Light_Theme/Dark_Light_Theme'
import { useEffect, useState } from 'react'
import { MenuItems } from './Components/Menu_Items/Menu_Items'
// import Home from './Pages/Home'
import Video from "./Pages/Video"
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SingIn from './Pages/SingIn'




function App() {
  const [myTheme, setMyTheme] = useState(true)
  useEffect(() => {
    document.title="Home"
  }, [])


  const Container = styled.div`
  display:flex;
  background-color:${({ theme }) => theme.bgLighter};
  `

  const Main = styled.div`
  flex:7;
  `

  const Wrapper = styled.div`
  padding:22px 96px;
  `

  return (
    <>
      <ThemeProvider theme={myTheme ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <MenuItems myTheme={myTheme} setMyTheme={setMyTheme} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='signin' element={<SingIn />} />
                    <Route path='video'>
                      <Route path=':id' element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
