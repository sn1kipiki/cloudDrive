import React from 'react'
import "./styles.scss"
import Search from '../Search/Search'
import notification from './assets/notification.svg'
import settings from './assets/settings.svg'
import avatar from './assets/avatar.png'


function SearchPanel() {
  return (
    <div className='searchPanel'>
        <Search/>
        <div className='searchPanel__buttons'>
            <button className='searcPanel__button'><img className='searcPanel__button-img'   src={notification} alt="notification icon" /></button>
            <button className='searcPanel__button'><img className='searcPanel__button-img' src={settings} alt="settings icon" /></button>
            <button className='searcPanel__avatar'><img className='searcPanel__avatar-img' src={avatar} alt="avatar" /></button>
        </div>
    </div>
  )
}

export default SearchPanel