
import React, { useState, useEffect } from 'react';
import { Burger, Avatar, Input, CloseButton } from 
'@mantine/core';
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";

import fileSearchIcon from "./assets/img/search.svg"
import AddNew from '../AddNew/AddNew'
import FolderLocation from '../FolderLocation/FolderLocation'




function Header({opened, toggle}) {
	const [value, setValue] = useState('Clear me');
	const [sort, setSort] = useState('type')
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	

	return (
		<div className={s.header}>
			<div className={s.toparea}>
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				<Input
				// mt={0}
				color="red"
				className={s.input}
				leftSection={ <img src={fileSearchIcon}/> }
				placeholder="Clearable input"
				value={value}
				onChange={(event) => setValue(event.currentTarget.value)}
				rightSectionPointerEvents="all"
				// mt="md"
				rightSection={
					<CloseButton
						aria-label="Clear input"
						onClick={() => setValue('')}
						style={{ display: value ? undefined : 'none' }}
					/>
			
					}
				/>
				<Avatar radius="xl" color="indigo"/>
			</div>
			<div className={s.botarea}>
				<FolderLocation/>
				{/* <button className={s.button}>Add File</button> */}
				<AddNew/>
			</div>
	 </div>
	)
}

export default Header