import React from "react";
import ProfileImage from "./assets/profilePicture.jpg";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Onu from "./pages/onu to world/onu.jsx";
import Portifolio from "./pages/portfolio/portfolio.jsx";
import Footer from "./components/footer.jsx";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Container = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;
`;

const Main = styled.div`
  width: 74vw;
  padding:0vw 10vh 1vh 20vh;
`;

const Header = styled.header`
  background-color: #ef7a85;
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 0;
  padding: 50px;
`;

const Img = styled.img`
  width: 180px;
  border-radius: 50%;
`;

const Name = styled.h1`
  color: #000814;
  text-shadow: 0 2px 4px #571089;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 18vw;
  height: 38vh;
  
`;

const Li = styled.li`
  list-style: none;
  background-color: #5e548e;
  padding: 12px;
  border-left: 3px solid #ff99c8; 
  border-top: 3px solid #ff99c8;
  border-right: 3px solid #ff99c8;
  border-bottom: 4px solid #ff99c8;
  margin-bottom: 3px;
  border-radius: 50px;
  text-align: center;
  &:hover{
  background-color: #a966f5;
  border-left: 3px solid #e26eff; 
  border-top: 3px solid #e26eff;
  border-right: 3px solid #e26eff;
  border-bottom: 3px solid #e26eff;
  }
`;

const NavLink = styled(Link)`
  color: #edf2f4;
  font-size: 1.2rem;
  text-decoration: none;
`;


function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header>
          <div>
            <Img src={ProfileImage} />
            <Name>Vitória Oliveira</Name>
          </div>
          <nav>
            <Ul>
              <Li>
                <NavLink to="/">
                  Bio
                </NavLink>
              </Li>
              <Li>
                <NavLink to="/portifolio">
                  Portfólio
                </NavLink>
              </Li>
              <Li>
                <NavLink to="/Onu">
                  Para um mundo melhor
                </NavLink>
              </Li>
            </Ul>
          </nav>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/Onu" element={<Onu />} />
            <Route path="/portifolio" element={<Portifolio />} />
          </Routes>
        </Main>
      </Container>
      <Footer/>
    </Router>
    
  );
}

export default App;