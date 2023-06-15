import styled from "styled-components";


export const CardContainer = styled.div`
height: 8rem; 
width: 78px;
border: 2px solid black;
margin: 16px;


&:hover {
  background-color:rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
`


export const CardContent = styled.div`
border-top: 1px solid gray;
padding: 16px;
`




