import { FC, memo, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { DashboardContent, DashboardCard } from './styles'
import { getCocktailsCategories } from '../../services/Cocktail'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { cards } from './constants'
import { Category } from '../../models/Category'

const Dashboard: FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)


  const handleSetCategories = useCallback(async() => {
    const categoriesList = await getCocktailsCategories()
    setCategories(categoriesList)
    setIsLoading(false)
  }, [] )


  useEffect(()=>{
    setIsLoading(true)
    handleSetCategories()
  },[handleSetCategories])


  if(isLoading){
    return( <div>CARGANDO</div> )
  }


  return (
    <DashboardContent>
      <Header />
      <DashboardCard>
        {categories.map((categories,index) => ( <Card key={index} cocktelCategory ={cocktelCategory} />))}
      </DashboardCard>
      <Footer />
    </DashboardContent>
  )
}

export default Dashboard