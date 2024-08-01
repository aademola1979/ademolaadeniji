import React from 'react'
import CardWrapper from './CardWrapper'
import Card from './Card'

const MobileAppTools = () => {
    const mobileTools = [
        {
            name:"React-Native",
            image:"/images/frontend-tools/react.svg"
        }
    ]
  return (
    <CardWrapper title="Mobile App Tools">
        {
            mobileTools.map((tool, i)=>(
                <Card key={i} tool={tool}/>
            ))
        }
    </CardWrapper>
  )
}

export default MobileAppTools