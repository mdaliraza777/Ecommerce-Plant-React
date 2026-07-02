import React from 'react'
import ReviewCard from './ReviewCard'
import SectionTitle from '../Common/SectionTitle'

const ReviewSection = () => {
  return (
    <section className='my-10 md:my-30'>
      <SectionTitle title="Customer Review"/>
      <div className='flex flex-wrap justify-center gap-2'>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      </div>
    </section>
  )
}

export default ReviewSection