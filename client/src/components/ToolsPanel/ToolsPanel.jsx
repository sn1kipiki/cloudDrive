import React from 'react'
import backImg from './assets/img/arrow-left-circle-fill.svg'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentDir} from "../../reducers/fileReducer";

function ToolsPanel() {
		const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
		const dirStack = useSelector(state => state.files.dirStack)
		function backClickHandler() {
			const backDirId = dirStack.pop()
			dispatch(setCurrentDir(backDirId))
		}
	return (
		<div>
			<button onClick={() => backClickHandler()}> <img src={backImg} alt="turn back" /> </button>

		</div>
	)
}

export default ToolsPanel