import React from 'react'
import "./styles.scss"
import {useSelector} from "react-redux";
import FileItem from '../FileItem/FileItem'


function FileList() {
  const files = useSelector(state => state.files.files).map((file) => <FileItem key={file.id} file={file}/>)
  return (
    <div className='fileList'>
      <div className='fileList__container'>
        {files}
      </div>
    </div>
  )
}

export default FileList