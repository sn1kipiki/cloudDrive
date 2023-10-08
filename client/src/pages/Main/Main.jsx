import React from 'react'
import Sidebar from '../../components/SideBar/Sidebar'
import './styles.scss'
import Search from '../../components/Search/Search'

function Main() {
  return (
    <div className='mainPage'>

        <Sidebar/>
        <dev className="contentField">
            <Search/>
        </dev>
    </div>
    
  
  )
}

export default Main