import React from 'react'
import "./styles.scss"

function NavigationItem({img, text}) {
  return (
    <a className='navigation__item'>
        <img className='navigation__item-img' src={img}/>
        <p className='navigation__item-text'>{text}</p>
    </a>
  )
}

export default NavigationItem