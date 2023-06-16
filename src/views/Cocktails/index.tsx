import { FC, memo, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { DashboardContent, DashboardCard, Container } from './styles'
import { getCocktailsByCategory } from '../../services/Cocktail'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Cocktail } from '../../models/Cocktail'
import { useParams } from 'react-router'

const Cocktails: FC = () => {
  const { categoryName } = useParams()
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGetCocktailsByCategory = useCallback(
    async (categoryName: string) => {
      const retrievedCocktails = await getCocktailsByCategory(categoryName)
      setCocktails(retrievedCocktails)
      setIsLoading(false)
    },
    []
  )

  useEffect(() => {
    if (categoryName) {
      setIsLoading(true)
      handleGetCocktailsByCategory(categoryName)
    }
  }, [categoryName])

  if (isLoading) {
    return <div>CARGANDO</div>
  }

  return (
    <Container>    
      <Header />
      <DashboardContent>
      
      <DashboardCard>
        {cocktails.map((cocktail, index) => (
          <Card
            key={index}
            categoryName={cocktail.cocktelName}
            cocktail={cocktail}
            cocktelImg={cocktail.cocktelImg}

          />
        ))}
      </DashboardCard>
      <Footer />
    </DashboardContent></Container>

  )
}

export default memo(Cocktails)
