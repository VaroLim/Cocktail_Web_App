import { FC, memo, useCallback, useEffect, useState } from 'react'

import Header from '../../components/Header'
import { DashboardContent, DashboardCard } from './styles'
import { getCocktailsCategories } from '../../services/Cocktail'
import Footer from '../../components/Footer'
import Card from '../../components/Card'



const Dashboard: FC = () =>{
  getCocktailsCategories()
  const [isLoading, setIsLoading] = useState(false)





  if (isLoading) {
    return <div>CARGANDO IMÁGENES...</div>
  }
  return (   

    <DashboardContent>
      <Header />
        <DashboardCard>
          <Card />
          
      
        </DashboardCard>
      <Footer />
    </DashboardContent> 

    
  )

}



export default memo(Dashboard) 