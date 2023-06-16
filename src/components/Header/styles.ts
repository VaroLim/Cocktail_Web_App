import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: black;
  color: #fff;
`

const HeaderContent = styled.div`
  display: flex;
  background-color: #222;
  height: 4.5rem;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeaderTitle = styled.div`
  cursor: pointer;
  color: #c9c00a;
  margin-left: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 1rem;
  font-weight: 900;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`

export { HeaderContainer, HeaderTitle, HeaderContent }
