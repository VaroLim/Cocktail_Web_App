import { FC, memo } from 'react'
import Header from '../../components/Header'
import {
  DashboardContent,
  DashboardCard,
  Img,
  Title,
  Container,
} from './styles'
import Footer from '../../components/Footer'
import { Props } from '../../components/Card/types'
import { useParams } from 'react-router-dom'

const Details: FC<Props> = () => {
  const { categoryName, cocktelImg } = useParams()

  return (
    <Container>
      <Header />

      <DashboardContent>
        <DashboardCard>
          <Title>{categoryName}</Title>

          <Img src={cocktelImg} />
        </DashboardCard>

        <Footer />
      </DashboardContent>
    </Container>
  )
}

export default memo(Details)
