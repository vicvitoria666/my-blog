import React from 'react';
import styled from 'styled-components';


const Bio = styled.h1`
display: flex;
justify-content: center;
`

const P = styled.p`
width: 85%;
`
const Box = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20%;
`

function home() {
  return (
    <Box>
 <Bio>Bio</Bio>
 <P>Oie! Meu nome é Vitória e eu sou gaúcha, moro no interior do Rio Grande do Sul e me profissionalizei na área de estética desde meus 12 anos até meus 17, passei por alguns problemas pessoais nos quais me encaminharam pra tecnologia com o propósito de mudar a minha vida pra melhor! Hoje eu estudo as linguagens Javascript e Swift, adoro programar é algo totalmente desafiador pra mim mas sempre recompensador! Tenho muito orgulho de ter entrado neste mundo da tecnologia pois ele me mostra a cada dia que posso ser uma pessoa melhor que ontem, além de ser uma forma incrível de trabalhar.</P>

    </Box>
  ) 
}

export default home;