import React, { Children, useState } from 'react'

export default function button(props) {

    const { disabled, children } = props;
    const [ isDisabled, setIsDisabled  ] = useState(disabled)
    
  return (
    <button 
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
      onClick={ () => {
        setIsDisabled(!isDisabled); 
        console.log('isDisabled state:', true);
        }} 
      disabled={isDisabled}>
    
      { children } 
    </button>

  )
  
}

