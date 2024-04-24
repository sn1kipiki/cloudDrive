
import React, { useState, useEffect } from 'react';
import { Burger, Avatar, Input, CloseButton } from 
'@mantine/core';
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile, searchFiles} from "../../actions/file";
import { API_URL } from '../../utils/config';
import fileSearchIcon from "./assets/img/search.svg"
import AddNew from '../AddNew/AddNew'
import FolderLocation from '../FolderLocation/FolderLocation'




function Header({opened, toggle}) {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const currntUser = useSelector(state => state.user.currentUser)
	const [sort, setSort] = useState('type')
	// const [value, setValue] = useState('')
	const [searchName, setSearchName] = useState('')
	const [searchTimeout, setSearchTimeout] = useState(false)
	const avatar = currntUser.avatar ? `${API_URL + currntUser.avatar}` : fileSearchIcon
	function searchChangeHandler(e) {
		setSearchName(e.target.value)
		if (searchTimeout != false) {
				clearTimeout(searchTimeout)
		}
		if(e.target.value != '') {
				setSearchTimeout(setTimeout((value) => {
						dispatch(searchFiles(value));
				}, 500, e.target.value))
		} else {
				dispatch(getFiles(currentDir))
		}
}
		function onClearInput() {
			setSearchName("")
			dispatch(getFiles(currentDir))
			
		}

	return (
		<div className={s.header}>
			<div className={s.toparea}>
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				<Input
				styles={{root: {marginBottom: "10px"},
				input: {backgroundColor: "#313239",
				color: '#fff'},
				label: { color: '#fff' },}}
				// mt={0}
				value={searchName}
				className={s.input}
				leftSection={ <img src={fileSearchIcon}/> }
				placeholder="File name..."
				
				onChange={e => searchChangeHandler(e)}
				rightSectionPointerEvents="all"
				// mt="md"
				rightSection={
					<CloseButton
						aria-label="Clear input"
						onClick={() => onClearInput()}
						style={{ display: searchName ? undefined : 'none' }}
					/>
			
					}
				/>
				{/* <Avatar currentUser  radius="xl" color="indigo"/> */}
				<div style={{display: "flex", alignItems: "center", color: "#fff",}}>
				<p>{currntUser.username}</p>
				<img className={s.avatar} src={avatar} alt="" />
				</div>
			</div>
			<div className={s.botarea}>
				<FolderLocation/>
				<AddNew/>
			</div>
	 </div>
	)
}

export default Header