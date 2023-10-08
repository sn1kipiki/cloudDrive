import React from 'react'
import "./styles.scss"

function Storage() {
  return (
    <div className='storage'>
        <div className='storage__top'>
            <h1 className='storage__title'>Storage</h1>
            <div className='storage__schedule'></div>
            <div className='storage__capacity'>42Gb</div>
            <div className='storage__ful-capacity'>Of 45 GB Capacity</div>
        </div>
    </div>
  )
}

export default Storage