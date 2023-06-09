import { FC, memo, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { DashboardContent, DashboardCard, Container} from './styles'
import { getCocktailsCategories } from '../../services/Cocktail'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Category } from '../../models/Category'
import { useNavigate } from 'react-router'
import Cocktails from '../Cocktails'
// import Background from '../../components/Background'

const Dashboard: FC = () => {
  const navigate = useNavigate()

  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSetCategories = useCallback(async () => {
    const categoriesList = await getCocktailsCategories()
    setCategories(categoriesList)
    setIsLoading(false)
  }, [])

  const handleGoToCocktailsByCategory = useCallback(
    async (categoryName?: string) => {
      navigate(`/categories/${categoryName}`)
    },
    [navigate]
  )

  useEffect(() => {
    setIsLoading(true)
    handleSetCategories()
  }, [handleSetCategories])

  if (isLoading) {
    return <div>CARGANDO</div>
  }

  return (
    <Container>
      <Header />

      <DashboardContent>
        <DashboardCard>
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={handleGoToCocktailsByCategory}
              categoryName={category.name}
              categorySlug={category.slug}
            />
          ))}
        </DashboardCard>
      </DashboardContent>
      <Footer />
    </Container>


  )
}

export default memo(Dashboard)
