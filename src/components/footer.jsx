import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: gray;
  color: #c05299;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Img = styled.img`
  width: 3vw;
  border-radius: 50%;
`;
const Ul = styled.div`
  display: flex;
  list-style: none;
  width: 30vw;
  justify-content: space-evenly;
`;
const Title = styled.h2`
  font-size: 2rem;
`;

export default function Nav() {
  return (
    <Container>
      <Title>Redes Sociais:</Title>
      <nav>
        <Ul>
          <li>
            <a href="https://www.linkedin.com/in/luziamerlim/">
              <Img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/luz_mmerlim/">
              <Img src="https://icon-library.com/images/instagram-png-icon/instagram-png-icon-6.jpg" />
            </a>
          </li>
          <li>
            <a href="https://github.com/luzmmerlim">
              <Img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            </a>
          </li>
        </Ul>
      </nav>
    </Container>
  );
}