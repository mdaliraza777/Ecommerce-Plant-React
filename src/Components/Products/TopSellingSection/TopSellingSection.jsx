import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import TopSellingProducts from './TopSellingProducts'

const TopSellingSection = () => {
  return (
    <section className='mt-20 md:mt-40'>
        <SectionTitle title="Our Top Selling Plants" />
        <TopSellingProducts />
    </section>
  )
}

export default TopSellingSection