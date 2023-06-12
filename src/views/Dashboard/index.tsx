import { FC, memo, useCallback, useEffect, useState } from 'react'
import {Cocktail}from "../../models/Cocktail"
import Header from '../../components/Header'
import { DashboardContent, DashboardCard } from './styles'
import { getCocktails } from '../../services/Cocktail'
import Footer from '../../components/Footer'



const Dashboard: FC = () =>{

  const [Cocktails,setCocktails] = useState<Cocktail[]>([])
  const [isLoading, setIsLoading] = useState(false)

    const handleSetPhotos = useCallback(async () => {
    let cocktailsList = await getCocktails()  


    setCocktails(Cocktails)         
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>CARGANDO IMÁGENES...</div>
  }
  return (   

    <DashboardContent>
      <Header />
        <DashboardCard>
          
      
        </DashboardCard>
      <Footer />
    </DashboardContent> 

    
  )

}



export default memo(Dashboard) 