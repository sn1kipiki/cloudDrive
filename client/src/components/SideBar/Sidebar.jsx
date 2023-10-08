import React from 'react'
import "./styles.scss"
import NavigationItem from '../NavigationItem/NavigationItem'

import logo from './assets/Logo.svg'

import dashbordLine from './assets/dashboardLine.svg'
import dashbord from './assets/dashboard.svg'
import filesLine from './assets/filesLine.svg'
import files from './assets/files.svg'
import favoriteLine from './assets/star_out-line.svg'
import favorite from './assets/star.svg'
import binLine from './assets/trash_out-line.svg'
import bin from './assets/trash.svg'
import settingsLine from './assets/settings_out-line.svg'
import settings from './assets/settings.svg'


const items = [
    {imgLine: dashbordLine, img: dashbord, text:"Dashbord"},
    {imgLine: filesLine, img: files, text: "Files"},
    {imgLine: favoriteLine, img: favorite, text:"Favorite"},
    {imgLine: binLine, img: bin, text: "Bin"},
    {imgLine: settingsLine, img: settings, text:"Settings"},
]



function Sidebar() {
    
  return (
    <div className='sidebar'>
        <img src={logo} className='sidebar__logo'/>
        <nav className='navigation'>
           { items.map((item, index) => (
            <NavigationItem imgLine={item.imgLine} img={item.img} text={item.text} key={index}/>
           ))
           }
    
        </nav>
    </div>
  )
}

export default Sidebar