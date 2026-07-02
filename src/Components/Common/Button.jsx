import React from 'react'

const Button = ({content}) => {
  return (
    <>
        <button className="w-[150px] px-4 py-2 font-normal rounded-xl border border-white text-xl">
          {content}
        </button>
    </>
  )
}

export default Button