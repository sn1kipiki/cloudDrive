import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './styles.module.scss'
import { Grid } from '@mantine/core';
import FileItem from '../FileItem/FileItem'
function FilesField(props) {

	const files = useSelector(state => state.files.files.filter(file => !file.isDelete));
		 
			// files = files.filter(file => file.isFavorite === true)
		 

	// if (props.binPage) {
	// 	const files = useSelector(state => state.files.files)
	// }
	const hasDirs = files.some(file => file.type === 'dir');
	const hasFiles = files.some(file => file.type !== 'dir');
	const fileView = useSelector(state => state.files.view)
	// const files = useSelector(state => state.files.files).map((file) => <Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem key={file.id} file={file}/> </Grid.Col> )

	return (
		
		<>
		{
			props.dir && hasDirs ?
			<>	
				<p className={s.header}>Folders</p>
				<hr className={s.hr} />
			</>
			:
			hasFiles &&
			<>	
				<p className={s.header}>Files</p>
				<hr className={s.hr} />
			</>
			
		}
		<div  className={ fileView === "plate" ? s.fieldPlate : s.field}>
		{
		files &&
		files.map(file => 
			
			props.dir ?  file.type === "dir" &&
                      <FileItem file={file}/>
												:
												file.type !== "dir" &&
												 <FileItem file={file}/>
												)}										
				</div>
		</>
	)
}

export default FilesField