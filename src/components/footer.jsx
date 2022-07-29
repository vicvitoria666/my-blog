import React from "react";
import styled from "styled-components";
import Wpp from "../assets/whatsapp-logo-icone.png"

const Container = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #c05299;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  
`;
const Img = styled.img`
  width: 3vw;
  border-radius: 50%;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 30vw;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #9e3667;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Title>Como me encontrar:</Title>
      <Nav>
        <Ul>
          <li>
            <a href="https://github.com/vicvitoria666">
              <Img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            </a>
          </li>
          <li>
            <a href="https://contate.me/vitoriaoliveirasilva">
              <Img src={Wpp} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vit%C3%B3ria-oliveira-da-silva-845496211">
              <Img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/https.vicvitoria/">
              <Img src="https://icon-library.com/images/instagram-png-icon/instagram-png-icon-6.jpg" />
            </a>
          </li>
          
        </Ul>
      </Nav>
    </Container>
  );
}