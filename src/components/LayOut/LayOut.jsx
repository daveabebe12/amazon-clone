import React from 'react'
import Header from '../Header/header'
import DisclaimerBanner from '../DisclaimerBanner/DisclaimerBanner'

function LayOut({children}) {
  return (
    <div>
        <DisclaimerBanner/>
        <Header/>
        {children}
    </div>
  )
}

export default LayOut