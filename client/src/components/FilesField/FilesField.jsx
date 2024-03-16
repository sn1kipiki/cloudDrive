import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './styles.module.scss'
import { Grid } from '@mantine/core';
import FileItem from '../FileItem/FileItem'
function FilesField(props) {
	const files = useSelector(state => state.files.files)

	// const files = useSelector(state => state.files.files).map((file) => <Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem key={file.id} file={file}/> </Grid.Col> )

	return (
		
		<>
		<p className={s.header}>{props.dir ? "Folders" : "Files"}</p>
		<hr className={s.hr} />
<Grid  className={s.field}>
		{files.map(file => 	props.dir ?  file.type === "dir" &&
                       <Grid.Col span={{ base: 5, md: 2, lg: 1.5 }}> <FileItem file={file}/>

											  </Grid.Col>
												:
												file.type !== "dir" &&
												<Grid.Col span={{ base: 5, md: 2, lg: 1.5 }}> <FileItem file={file}/>

											  </Grid.Col>
												)}
												
				</Grid>
			{/* <Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col>
			<Grid.Col span={{ base: 5, md: 3, lg: 2 }}> <FileItem/> </Grid.Col> */}
		</>
	)
}

export default FilesField