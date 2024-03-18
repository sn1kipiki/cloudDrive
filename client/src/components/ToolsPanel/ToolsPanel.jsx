import React from 'react'
import backImg from './assets/img/arrow-left-circle-fill.svg'
import plateImg from './assets/img/layout-grid-fill.svg'
import rowsImg from './assets/img/list-check.svg'
import {useDispatch, useSelector} from "react-redux";
import {setFileView, setCurrentDir, setPath} from "../../reducers/fileReducer";

function ToolsPanel() {
		const dispatch = useDispatch()
		const fileView = useSelector(state => state.files.view)
    const currentDir = useSelector(state => state.files.currentDir)
		const dirStack = useSelector(state => state.files.dirStack)
		const pathStak = useSelector(state => state.files.pathStack)
		function backClickHandler() {
			const backDirId = dirStack.pop()
			const backPath = pathStak.pop()
			dispatch(setCurrentDir(backDirId))
			dispatch(setPath(backPath))
		}
		function changeView() {
			fileView === "plate" ?  dispatch(setFileView('list')) : dispatch(setFileView('plate'))
		}
	return (
		<div>
			<button onClick={() => backClickHandler()}> <img src={backImg} alt="turn back" /> </button>
			<button onClick={() => changeView()}> <img src={ fileView == "plate" ? plateImg : rowsImg} alt="turn back" /> </button>
		</div>
	)
}

export default ToolsPanel