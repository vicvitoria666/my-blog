import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios"

const Img = styled.img`
  width: 3vw;
  border-radius: 50%;
`;

const Li = styled.li`
display: flex;
justify-content: space-between;
padding: 10px;
background-color: #ffc8dd;
border: 2px solid #ffafcc;
margin-bottom: 10px;
margin-left: 25px;
`

const Title = styled.h3`
margin-left: 10px;
display: flex;
`

const A = styled.a`
color: #ff0a54;
text-decoration: none;
background-color: #f7cad0;
border: solid 1px #ff85a1;
border-radius: 10%;
`
const Cell = styled.div`
display: flex;
`

function Portfolio() {

const [projectsList, setProjectsList] = useState([])

useEffect(()=>{
axios.get(`https://api.github.com/users/vicvitoria666/repos`).then((response)=>{
  setProjectsList(response.data)
})
}, [])

const mapProjects = () => {
  return projectsList.map(item=>(
    <Li key={item.id} >
      <Cell>
      <Img src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
      <Title>{item.name}</Title>
      </Cell>
      <A href={item.html_url} >Saiba mais...</A>
    </Li>
  ))
}


  return (
    <ul>
        
      {mapProjects()}     
       
    </ul>
  )
}

export default Portfolio;