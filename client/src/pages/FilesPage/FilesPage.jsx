import React, {useEffect} from 'react'
import s from './styles.module.scss'
import FileItem from '../../components/FileItem/FileItem'
import FilesField from '../../components/FilesField/FilesField'
import {createDir, getFiles, uploadFile} from "../../actions/file";
import {useDispatch, useSelector} from "react-redux";
import ToolsPanel from '../../components/ToolsPanel/ToolsPanel'

function FilesPage() {
	const dispatch = useDispatch()
		const currentDir = useSelector(state => state.files.currentDir)
		const dirStack = useSelector(state => state.files.dirStack)
	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir])
	const files = useSelector(state => state.files.files)

	return (
		<div>
			<ToolsPanel/>
			<FilesField dir={true}/>
			<FilesField/>
		</div>
	)
}

export default FilesPage