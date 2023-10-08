import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import more from './assets/more.svg'
import img from './assets/image.svg'
import "./styles.scss"
import {pushToStack, setCurrentDir} from "../../reducers/fileReducer";
function FileItem
({file}) {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    

    function openDirHandler() {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    }
  return (

    <div className='fileItem' onClick={file.type === 'dir' ? ()=> openDirHandler() : ''}>
        <img className='fileItem__img' src={img} />
        <p className='fileItem__name'>{file.name}</p>
        <p className='fileItem__date'>{file.date.slice(0,10)}</p>
        <p className='fileItem__size'>{file.size}</p>
        <button className='fileItem__more'><img className='fileItem__more-img' src={more} /></button>
    </div>
  )
}

export default FileItem