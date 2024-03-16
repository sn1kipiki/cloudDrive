import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir, setMenuDisplay} from "../../reducers/fileReducer";
import {deleteFile, downloadFile} from "../../actions/file";

import s from './styles.module.scss'
import {  Menu, Card, Image, Text, Badge, Button, Group } from '@mantine/core';
const theme = false
function FileItem({file}) {

  const dispatch = useDispatch()
    
  const currentDir = useSelector(state => state.files.currentDir)
  function openDirHandler(file) {
    if(file.type === "dir"){
      
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
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

	return (
    <Card maw={150} shadow="sm"   withBorder className={theme? s.file : s.fileDark} onClick= {()=> openDirHandler(file)}>
      <Menu shadow="md" width={100}>
      <Card.Section className={s.image}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={100}
          alt="Norway"
        />
      </Card.Section>
      
       <Card.Section  className={s.cardBot}>
         <div className={s.name}>{file.name}</div>
          {file.type !== "dir"&&
          
          <Menu.Target>
            <button className={s.button}>ADD</button>
          </Menu.Target>
          }
      </Card.Section>
      
      

      <Menu.Dropdown>
        <Menu.Item
        //  leftSection={ <img src={uploadImg} /> }
				onClick={(e) => downloadClickHandler(e)}
				>
          Download
        </Menu.Item>
				<Menu.Divider />
        <Menu.Item
          // leftSection={ <img src={folderImg} /> }
          onClick={(e) => deleteClickHandler(e)}
        >
						Delete
        </Menu.Item>
				{/* <Menu.Item
          leftSection={ <img src={folderImg} /> }
        >
          UploadFolder
        </Menu.Item> */}
      </Menu.Dropdown>
    </Menu>
        
    </Card>
	)
}

export default FileItem