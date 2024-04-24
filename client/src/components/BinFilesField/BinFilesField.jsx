import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './styles.module.scss'
import { Grid } from '@mantine/core';
import FileItem from '../FileItem/FileItem'
function BinFilesField(props) {
	const files = useSelector(state => state.files.files.filter(file => file.isDelete === true));

	// if (props.binPage) {
	// 	const files = useSelector(state => state.files.files)
	// }
	
	const fileView = useSelector(state => state.files.view)
	// const files = useSelector(state => state.files.files).map((file) => <Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem key={file.id} file={file}/> </Grid.Col> )

	return (
		
		<>
		<p className={s.header}>Files</p>
		<hr className={s.hr} />
		<div  className={ fileView === "plate" ? s.fieldPlate : s.field}>
		{
		files &&
		files.map(file => 
			
              <FileItem file={file}/>

							)}										
			</div>
		</>
	)
}

export default BinFilesField