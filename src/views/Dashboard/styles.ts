import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  background-image: url('/background_image.jpg');
  background-size: cover;
`

export const DashboardContent = styled.div`
  display: flex;
  margin: 16px;
  align-items: center;
  justify-content: center;
  height: 91vh;
  overflow: auto;
  padding: 16px;
  flex-direction: column;
  border: 5px double rgba(255, 0, 132, 0.99);
  background-color: rgba(200, 2, 226, 0.1);
  box-shadow: 0px 0px 20px inset rgba(255, 55, 255, 255);
  border-radius: 8%;
`

export const DashboardCard = styled.div`
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin: 16px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;

  height: 80%;
  width: 80%;
  overflow: auto;
  padding: 16px;
  flex-direction: column;
  border: 2px solid white;
  background-color: rgba(226, 226, 226, 0.1);
  box-shadow: 0px 0px 20px inset rgba(81, 249, 1);
`
