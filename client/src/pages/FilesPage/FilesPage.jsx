import React, {useEffect, useState} from 'react'
import s from './styles.module.scss'
import FileItem from '../../components/FileItem/FileItem'
import FilesField from '../../components/FilesField/FilesField'
import {createDir, getFiles, uploadFile} from "../../actions/file";
import {useDispatch, useSelector} from "react-redux";
import ToolsPanel from '../../components/ToolsPanel/ToolsPanel'
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';


function FilesPage() {
	const [dragEnter, setDragEnter] = useState(false)
	const [scroll, scrollTo] = useWindowScroll();
	const dispatch = useDispatch()
		const currentDir = useSelector(state => state.files.currentDir)
		const dirStack = useSelector(state => state.files.dirStack)
	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir])
	const files = useSelector(state => state.files.files)
	{console.log(currentDir)}

	function dragEnterHandler(event) {
		event.preventDefault()
		event.stopPropagation()
		setDragEnter(true)
}

		function dragLeaveHandler(event) {
				event.preventDefault()
				event.stopPropagation()
				setDragEnter(false)
		}

		function dropHandler(event) {
				event.preventDefault()
				event.stopPropagation()
				let files = [...event.dataTransfer.files]
				files.forEach(file => dispatch(uploadFile(file, currentDir)))
				setDragEnter(false)
		}


	return ( 
		<div className={s.page}>
		{
			!dragEnter ?
			<div onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
				<ToolsPanel/>
				<FilesField dir={true}/>
				<FilesField/>
			</div>
			:
			<div className={s.droparea} onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
					Drop files here
			</div>
		}
		<Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
			
		</div>
	)
}

export default FilesPage