import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import SizePanel from '../SizePanel/SizePanel'
import {setCurrentDir,setPopupDisplay} from "../../reducers/fileReducer";
import CreateDir from '../PopUps/CreateDirPopUp/CreateDir';

function RightSideBar() {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }
  function backClickHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
}

  return (
    <div className='rightSideBar'>
        <SizePanel/>
        <button className='addFile' onClick={()=> {showPopupHandler()}}>create dir</button>
        <button className='addFile' onClick={()=> {backClickHandler()}}>back</button>
        {/* { console.log(popupDisplay)} */}
        <CreateDir/>
    </div>
  )
}

export default RightSideBar