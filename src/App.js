import React from "react";
import ProfileImage from "./assets/profilePicture.jpg";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Onu from "./pages/onu to world/onu.jsx";
import Portifolio from "./pages/portfolio/portfolio.jsx";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 74vw;
`;

const Header = styled.header`
  background-color: #e29578;
  width: 26vw;
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
  text-shadow: 0 1px 2px #495057;
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
  border-left: 8px solid #f98da0;
  padding: 12px;
`;

const NavLink = styled(Link)`
  color: #edf2f4;
  font-size: 1.2rem;
  text-decoration: none;
`;

const Contacts = styled.a`
color: #edf2f4;
font-size: 1.2rem;
text-decoration: none;
`
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
                <Link to="/Portifólio">
                  Portfólio
                </Link>
              </Li>
              <Li>
                <Link to="/Onu">
                  Para um mundo melhor
                </Link>
              </Li>
              <Li>
                <Contacts href="#Contacts">
                 Contacts
                </Contacts>
              </Li>
            </Ul>
          </nav>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/Onu" element={<Onu />} />
            <Route path="/Portifolio" element={<Portifolio />} />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
}

export default App;