import React from 'react'

export default function Buttons({page , pagejump , count}) {
  return (
    <div style={{backgroundColor : count==page+1 ? 'black' : '' , color : count==page+1 ? 'white' : '' }} onClick={(e)=>pagejump(e) } className='pagebtn' data-id={page+1}>{page+1}</div>
  )
}
