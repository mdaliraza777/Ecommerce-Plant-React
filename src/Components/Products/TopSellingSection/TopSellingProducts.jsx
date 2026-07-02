import React from 'react'
import { plants } from '../../../Data/Plants'
import PlantCard from './PlantCard'

const TopSellingProducts = () => {
  return (
    
    <div className='flex flex-wrap justify-center md:gap-5 mt-8 md:mt-15'>
        {plants.map((item, index) => {
            return (
            <PlantCard key={index} image={item.image} name={item.name} description={item.description} price={item.price} />
        )
        })}

    </div>
   
  )
}

export default TopSellingProducts