import React,{ useState } from 'react'
import styled from "styled-components"
import ODS2 from '../../assets/ODS2.png'
import ODS3 from '../../assets/ODS3.png'
import ODS4 from '../../assets/ODS4.png'
import ODS11 from '../../assets/ODS11.png'
import ODS14 from '../../assets/ODS14.png'
import iconODS2 from '../../assets/iconODS2.png'
import iconODS3 from '../../assets/iconODS3.png'
import iconODS4 from '../../assets/iconODS4.png'
import iconODS11 from '../../assets/iconODS11.png'
import iconODS14 from '../../assets/iconODS14.png'

const ImgDefault = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ bgColor }) => bgColor};
  z-index:${({ZIx})=>ZIx};
`;

const ContainerDefault = styled.section`
  width:100%;
  padding:${({padding})=>padding};
  display:flex;
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-image:url(${({backgroundImage})=>backgroundImage});
  background-Color:${({bgColor})=>bgColor};

`;
ContainerDefault.defaultProps ={
  flexDirection:'column',
  position:'relative',
}

const SiteDefault = styled.cite`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    display:${({display})=>display};
    flex-direction:${({flexDirection})=>flexDirection};
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
`;
SiteDefault.defaultProps = {
    display:'flex',
}

const ContentDefault = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection};
    flex-wrap:wrap;
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color:${({bgColor})=>bgColor};
    background-image:url(${({backgroundImage})=>backgroundImage});
    background-size:${({bgSize})=>bgSize};
    background-repeat:${({bgRepeat})=>bgRepeat};
    background-position:${({bgPosition})=>bgPosition};
   
`;

const FigcaptionDefault = styled.figcaption`
  width:${({width})=>width};  
  display:flex;
  padding:${({padding})=>padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-color:${({bgColor})=>bgColor};
`;
FigcaptionDefault.defaultProps ={
  flexDirection:'column',
}

const FigureDefault = styled.figure`
  width:${({width})=>width};
  padding:${({padding})=>padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  display:flex;
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-color:${({bgColor})=>bgColor};
  z-index:4 ;
`;
FigureDefault.defaultProps ={
  flexDirection:'column',
}

const SectionDefault = styled.section`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection};
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
    border: ${({ border }) => border};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    border-radius: ${({ borderRadius }) => borderRadius};
`;

const Text = styled.h2`
  width: ${({ width }) => width};
  padding:${({padding})=>padding};
  border-radius:${({borderRadius})=>borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  font-size: ${({ Size }) => Size};
  font-family:${({family})=>family};
  margin: ${({ margin }) => margin};   
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-weight: ${({ Weight }) => Weight};
  text-align: ${({ Align }) => Align};
  font-style:${({Style})=>Style};
  text-decoration:${({decoration})=>decoration};
  background-color:${({bgColor})=>bgColor};
`;
Text.defaultProps = {
    family: "'Roboto', sans-serif",
    color: "#ebf2fa",
    decoration:"none",
    Style:"normal",
  }

export default function Onu() {
  const [modal,setModal]=useState(Number(0))
  const listODSCards= [
    {id:2,img:ODS2},
    {id:3,img:ODS3},
    {id:4,img:ODS4},
    {id:11,img:ODS11},
    {id:14,img:ODS14}
  ]
  const listODSInfoCardsModal=[
    {id:2,icon:iconODS2, Color:"#dda63a", NameODS:"Fome zero e agricultura sustentável", objectiveODS:"Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável e local", mySolutionODS:"O incentivo a agricultura pode ser proveitoso de diversas formas, além de educacional, promovendo a conscientização de dar e receber algo através de cuidado constante com o alimento e a natureza, o processo de plantio pode ser muito agradável para o bem-estar psicológico do indivíduo, promove diversos benefícios a saúde de quem consumira tais produtos.",},
    {id:3,icon:iconODS3, Color:"#4c9f38", NameODS:"Saúde e bem estar", objectiveODS:"Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades", mySolutionODS:"A acessibilidade a médicos de certas áreas mais especifícas para idosos é de difícil acesso no meu bairro, caso nao haja meio de locomoção é necessário gerar um gasto maior ou um desgaste físico no transporte público, a acessibilidade pode ser crucial para grande parte do moradores do bairro que já estão na 3° idade.",},
    {id:4,icon:iconODS4, Color:"#c5192d", NameODS:"Educação de qualidade", objectiveODS:"Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos", mySolutionODS:"Uma das fases mais difíceis da educação pode ser considerada o ensino médio, é o divisor de quem quer alavancar numa carreira profissinal, é onde as pessoas mais bem preparadas tem a oportunidade de aprender mais e de forma mais profunda, com a maioridade chegando e as responsabilidades também o difícil acesso a educação pode ser um inimigo em potência do adolescente, é muito importante que todos os bairros tivessem escolas de ensino fundamental e médio sem a necessidade de pagar por ônibus.",},
    {id:11,icon:iconODS11, Color:"#fd9d24", NameODS:"Cidade e comunidade sustentável", objectiveODS:"Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis", mySolutionODS:"A coleta seletiva já é algo existente porém placas indicativas sobre estes dias poderiam incentivar a população a fazer o descarte do lixo de forma correta, além da implementação de mais lixeiras pelo bairro para facilitar a vida do cidadão e impedir que as ruas sejam sujas pelos animais de rua.",},
    {id:14,icon:iconODS14, Color:"#0a97d9", NameODS:"Vida na Água", objectiveODS:"Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável", mySolutionODS:"O descarte incorreto de resíduos industriais pode vir a causar uma grande desordem no ecosistema dos rios, além de ser um grande risco a saúde considerando que a pesca local é algo cotidiano, isso trás risco a natureza e a sociedade, uma solução em potencial seria o tratamento a base de calcário para preservar a vida da nossa fauna.",}
  ]
  const MapODSCards = () =>{
    return(listODSCards.map(item =>(
          <ImgDefault onClick={()=> setModal(modal!=item.id? item.id: 0)} width={"8vw"} margin={"0.3vw 0.5vw"} key={item.id} src={item.img} />
    )))
  }
   const MapODSInfoCardsModal = () =>{
    return(listODSInfoCardsModal.filter(item=>item.id == modal).map(item =>(
          <ContainerDefault padding={"1.5% 4% 0"}>
              <ContentDefault
                width={'100%'}
                height={"53vh"}
                padding={'0 5%'}
                borderRadius={'10px'}
                flexDirection={'column'}
                justifyContent={'center'}
                bgColor={item.Color} 
                backgroundImage={item.icon} 
                bgSize={'30%'} 
                bgRepeat={'no-repeat'} 
                bgPosition={'90% center'}
              >
                <Text Size={'2.5vh'} Weight={'400'} > Objetivo de Desenvolvimento Sustentável</Text>
                <Text Size={'10vh'} Weight={'500'} >{item.id}</Text>
                <Text width={'50%'} Size={'6vh'} Weight={'600'} >{item.NameODS}</Text>
                <Text width={'50%'} Size={'2.5vh'} Weight={'400'} >{item.objectiveODS}</Text>
              </ContentDefault>
              <ContentDefault
                width={'100%'}
                padding={'3% 1%'}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Text 
                  Size={'3vh'} 
                  color={'#2b2c28'} 
                  Weight={'600'}
                >
                   O que meu bairro pode fazer nesse objetivo?</Text>
                <Text margin={'2% 0'} Size={'2.5vh'} color={'#2b2c28'} Weight={'400'} >{item.mySolutionODS}</Text>
              </ContentDefault>
            </ContainerDefault>
    )))
  }
  return (
    <>
    <ContainerDefault>
      <SectionDefault width={'100%'} flexDirection={'column'} >
        <Text margin={'0% 1% 1% 3%'} Size={'6vh'} Weight={'600'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável no Brasil</Text>
        <Text margin={'0 1%'} Size={'2.5vh'} Weight={'400'} color={'#2b2c28'}>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</Text>
        <SiteDefault width={'100%'} display={'block'} margin={'1% 1%'} >
          <Text Align={"center"} width={'100%'} Size={'3vh'} Weight={'400'} color={'#2b2c28'}>"Pensar no futuro é agir no agora."</Text>
        </SiteDefault>
      </SectionDefault>
      <SectionDefault width={'100%'} flexDirection={"column"}>

        <ContentDefault width={'100%'} flexDirection={'row'} justifyContent={'center'} >
          {MapODSCards()}
        </ContentDefault>
        <ContentDefault 
        >
        {MapODSInfoCardsModal()}
        </ContentDefault>
      </SectionDefault>
    </ContainerDefault>  
    </>
    );
}