import React from 'react'
import './Container.css'

const Container = (props) => {
  return (
    <div className='bg' >
      {props.children}
    </div>
  )
}

export default Container