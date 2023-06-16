import styled from 'styled-components'

export const Container = styled.div`
overflow: auto;
background-size: cover;
background: #635445;
`


export const DashboardContent = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  height: 91vh;
  background: #635445;
  overflow: auto;

`
  
export const DashboardCard = styled.div`
  background-color: #222;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  height:75%;
  width: 50%;
`;
export const Title = styled.h2`
  color: #a8a2a2;
  margin-bottom: 5rem;
  font-size: 2rem;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 3rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 8px rgba(0.3, 0.3, 0.3, 0.7);
`