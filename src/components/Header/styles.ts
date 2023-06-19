import styled from 'styled-components'

const HeaderContainer = styled.header`
  color: #fff;
  margin: 16px;
  border: 5px double rgba(12, 255, 255, 0.99);
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 255);
`

const HeaderContent = styled.div`
  display: flex;
  background-color: white;
  height: 4.5rem;
  background-color: rgba(200, 2, 226, 0.1);
  box-shadow: 0px 0px 15px inset rgba(255, 255, 255);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeaderTitle = styled.div`
  cursor: pointer;
  color: #f5ff39;
  text-shadow: 0px 0px 20px #ff5c0f;
  text-align: center;
  margin-left: 1rem;
  font-size: 2rem;
  line-height: 1.5;
  padding: 1rem;
  font-weight: 900;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`

export { HeaderContainer, HeaderTitle, HeaderContent }
