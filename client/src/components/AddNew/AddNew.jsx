import React, {useState} from 'react'
import s from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import { useDisclosure } from '@mantine/hooks';
import { TextInput, Menu, Flex, Modal, Button, Paper, rem  } from '@mantine/core';
import { createDir, getFiles, uploadFile} from "../../actions/file";
import uploadImg from './assets/img/upload-cloud-fill.svg'
import folderImg from './assets/img/folder-fill.svg'
function AddNew() {
	const [opened, { open, close }] = useDisclosure(false);
	const [dirName, setDirName] = useState('')
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	function fileUploadHandler(event) {
		const files = [...event.target.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
		close()
	}
	function createHandler() {
		dispatch(createDir(currentDir, dirName))
		close()
		setDirName("")
	}

	return (
		<>
			
			<Modal opened={opened} onClose={close}
			title="Add new folder" centered styles={{
        content: { backgroundColor: 'var(--mantine-color-dark-6)' },
				header:{ backgroundColor: 'var(--mantine-color-dark-6)', color: "#fff" },
      }}
>				<TextInput
					placeholder="Folder name"
					value={dirName} onChange={(event) => setDirName(event.currentTarget.value)}
					styles={{root: {marginBottom: "10px"},
				input: {backgroundColor: "#313239",
				color: '#fff'},
				label: { color: '#fff' },}}
    		/>
				<Button className={s.modal_button} onClick={() => createHandler()}>Create</Button>
      </Modal>
			{/* <button onClick={open} className={s.button}>Open modal</button> */}




			<Menu shadow="md" width={200}>
      <Menu.Target>
			<button className={s.button}>ADD</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={ <img src={uploadImg} /> }
				onClick={() => open()}
				>
          New folder
        </Menu.Item>
				<Menu.Divider />
        <Menu.Item
          leftSection={ <img src={folderImg} /> }
        >
						<label htmlFor="disk__upload-input" className={s.upload}>Загрузить файл</label>
        </Menu.Item>
				<Menu.Item
          leftSection={ <img src={folderImg} /> }
        >
          UploadFolder
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
		<input   multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className={s.fileinput}/>
		</>
		// webkitdirectory="" directory=""
	)
}

export default AddNew