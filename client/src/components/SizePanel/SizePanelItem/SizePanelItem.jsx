import React from 'react'
import './styles.scss'
function SizePanelItem({img, name, fileCount, size}) {
  return (
    <div className='sizePanel__item'>
        <img src={img} className='sizePanel__img' />
        <div className='sizePanel__text-block'>
            <p  className='sizePanel__name'>{name}</p>
            <p className='sizePanel__files'>{fileCount + "files"}</p>
        </div>
        <div className='sizePanel__size'>{size + "GB"}</div>
    </div>
  )
}

export default SizePanelItem