import React from 'react'
import './styles.scss'
import SizePanelItem from './SizePanelItem/SizePanelItem'
import image from './assets/image.svg'
import document from  './assets/document.svg'
import audio from  './assets/audio.svg'
import video from  './assets/video.svg'
import other from  './assets/other.svg'
function SizePanel() {
  return (
    <div className='sizePanel'>
       <SizePanelItem img={image} name={"Image"} fileCount={234} size={2.2}/>
       <SizePanelItem img={document} name={"Document"} fileCount={234} size={2.2}/>
       <SizePanelItem img={audio} name={"Audio"} fileCount={234} size={2.2}/>
       <SizePanelItem img={video} name={"Video"} fileCount={234} size={2.2}/>
       <SizePanelItem img={other} name={"Other"} fileCount={234} size={2.2}/>
    </div>
  )
}

export default SizePanel