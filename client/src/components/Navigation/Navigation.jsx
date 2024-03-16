import React, {useState} from 'react'
import {useMantineColorScheme,  Button, NavLink, Box  } from '@mantine/core';
import mainIcon from './assets/main.svg'
import recentIcon from './assets/recent.svg'
import trashIcon from './assets/trash.svg'
import favoriteIcon from './assets/favorite.svg'
import settingsIcon from './assets/settings.svg'
import mainfillIcon from './assets/mainfill.svg'
import recentfillIcon from './assets/recentfill.svg'
import trashfillIcon from './assets/trashfill.svg'
import favoritefillIcon from './assets/favoritefill.svg'
import settingsfillIcon from './assets/settingsfill.svg'

import s from './styles.module.scss'
import { Link } from 'react-router-dom'
const NavIcon = ({link, alt}) =>{
	return(
		<img src={link} alt={alt}/>
	)
}
const data = [
  { icon: mainIcon, fillicon: mainfillIcon,  label: 'My cloudy', alt: "my cloud icon", href:"/"},
  {
    icon: recentIcon, fillicon: recentfillIcon, label: 'Recent', alt: "recent files icon" , href:"/recent"
  },
  { icon: trashIcon, fillicon: trashfillIcon,  label: 'Trash', alt: "trash icon", href:"/bin" },
  { icon: favoriteIcon, fillicon: favoritefillIcon,  label: 'Favorite', alt: "favorite icon", href:"/favorite" },
  { icon: settingsIcon, fillicon: settingsfillIcon,  label: 'Settings', alt: "settings icon", href:"/settings" },
];


function Navigation({toggle}) {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
	const [active, setActive] = useState(0);
  const onClikHendler = (index, toggle)=>{
    setActive(index)
    toggle()
  }
	const items = data.map((item, index) => (

   
      <Link to={item.href}>
         <NavLink 
      // href={item.href}
            link={item.href}
            className={s.nav}
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            leftSection={ index === active? <NavIcon link={item.fillicon} alt={item.alt}  /> : <NavIcon link={item.icon} alt={item.alt}  />}
            onClick={() =>  onClikHendler(index, toggle) }
            color="violet"
          />
      </Link>
    
  ));

	return (
    <>
    
    <Box maw={220} className={s.box}>{items}</Box>
    
    </>
  
  
  );
	

}

export default Navigation