import React from 'react'

const CustomButton = ({className, text, method}) => {
  return (
     <button className={className} onClick={method}>
        {text}
     </button>
  )
}

export default CustomButton