import { FC, memo, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { DashboardContent, DashboardCard } from './styles'
import { getCocktailsByCategory } from '../../services/Cocktail'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Cocktail } from '../../models/Cocktail'
import { useParams } from 'react-router'
import { addFavPhoto } from '../../services/storage/Cocktails'

const Cocktails: FC = () => {
  const {categoryName} = useParams()
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [isLoading, setIsLoading] = useState(false)


const handleFav = useCallback((cocktail: Cocktail) => {
    addFavPhoto(cocktail)
  }, []);



  const handleGetCocktailsByCategory = useCallback(async (categoryName: string) => {
    const retrievedCocktails = await getCocktailsByCategory(categoryName)
    setCocktails(retrievedCocktails)
    setIsLoading(false)

  }, [] )


  useEffect(()=>{
    if (categoryName) {
      setIsLoading(true)
      handleGetCocktailsByCategory(categoryName)
    }
  },[categoryName])


  if(isLoading){
    return( <div>CARGANDO</div> )
  }


  return (
    <DashboardContent>
      <Header />
      <DashboardCard>
        {cocktails.map((cocktail,index) => ( <Card  key={index} categoryName={cocktail.cocktelName} cocktail={cocktail}
        />))}

      </DashboardCard>
      <Footer />
    </DashboardContent>
  )
}

export default memo(Cocktails)