import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import {getFiles} from "../../actions/file";
import Sidebar from '../../components/SideBar/Sidebar'
import './styles.scss'
import FileItem from '../../components/FileItem/FileItem'
import FileList from '../../components/FileList/FileList'

import RightSideBar from '../../components/RightSideBar/RightSideBar';
function Dashbord() {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)

  useEffect(() => {
      dispatch(getFiles(currentDir))
  }, [currentDir])
  return (
    <>
    
    <Sidebar/>
    <div className='center-area'>
      
      <SearchPanel/>
      <FileList/>
      
    </div>
    <RightSideBar/>
    </>
  )
}

export default Dashbord