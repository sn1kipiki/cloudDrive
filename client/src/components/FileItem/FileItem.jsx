import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {pushPathToStack, pushToStack, setCurrentDir, setMenuDisplay, setPath} from "../../reducers/fileReducer";
import {deleteFile, downloadFile, sendtoBin, setFavorite} from "../../actions/file";
import iconType from '../../utils/icons.js'
import s from './styles.module.scss'
import moreImg from './assets/img/more-2-fill.svg'
import {  Menu, Card, Image} from '@mantine/core';
import sizeFormat from "../../utils/sizeFormat";
import { truncate } from '../../utils/truncate.js';
const theme = false
function FileItem({file}) {
  
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const currentPath = useSelector(state => state.files.path)
  const fileView = useSelector(state => state.files.view)
  function openDirHandler(file) {
    if(file.type === "dir"){
      
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
      dispatch(pushPathToStack(currentPath))
      dispatch(setPath(file.path))
    } 
  }
  
  function downloadClickHandler(e) {
    e.stopPropagation()
    downloadFile(file)
  }
  function deleteClickHandler(e) {
    e.stopPropagation()
    dispatch(deleteFile(file))
  }
  function openMenuHandler(e) {
    e.stopPropagation()
  }
  function setFavoriteClickHandler(e) {
    dispatch(setFavorite(file))
  }
  function setBinClickHandler(e) {
    dispatch(sendtoBin(file))
  }
	return (
    <div className={ fileView == "plate" ? s.cardfield__block : s.cardfield} onClick= {()=> openDirHandler(file)}>

      <Menu shadow="md" width={100}>
    {fileView == "plate" ?
      <>
      <div className={s.image__block}>
            <Menu.Target>
              <button onClick={(e)=> openMenuHandler(e)} className={s.button}> <img src={moreImg} alt="open file menu" /> </button>
            </Menu.Target>
          <img  src={iconType(file.type)} alt="" />
          </div>
          
            <p className={s.name}>{truncate(file.name) }</p>
            
         
      </>
      :
      <>   
        
         <img className={s.image__row}  src={iconType(file.type)} alt="" />
          <p className={s.name}>{file.name}</p>
          <p className={s.date}>{file.date.slice(0, 10)}</p>
          <p className={s.name}>{sizeFormat(file.size)}</p>
          <Menu.Target>
            <button onClick={(e)=> openMenuHandler(e)} className={s.button}> <img src={moreImg} alt="open file menu" /> </button>
          </Menu.Target>          
      </>
    }



      <Menu.Dropdown>
        {file.type !== "dir" &&
          <Menu.Item
          //  leftSection={ <img src={uploadImg} /> }
          onClick={(e) => downloadClickHandler(e)}
          >
            Download
          </Menu.Item>
        }
				<Menu.Divider />
        
        <Menu.Item
          // leftSection={ <img src={folderImg} /> }
          onClick={(e) => setFavoriteClickHandler(e)}
        >
						Add to favorite
        </Menu.Item>
        {file.isDelete ?

        <Menu.Item
          // leftSection={ <img src={folderImg} /> }
          onClick={(e) => deleteClickHandler(e)}
        >
						delete
        </Menu.Item>
        :
        <Menu.Item
          // leftSection={ <img src={folderImg} /> }
          onClick={(e) => setBinClickHandler(e)}
        >
						Send to bin
        </Menu.Item>
        } 
      </Menu.Dropdown>
    </Menu>
        
    </div>
	)
}

export default FileItem