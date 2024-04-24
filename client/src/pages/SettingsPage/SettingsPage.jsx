import React from 'react'
import {FileButton, Text, Paper, TextInput, Button } from '@mantine/core';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import s from './styles.module.scss'
function SettingsPage() {
	const dispatch = useDispatch()

	function changeHandler(e) {
			const file = e.target.files[0]
			dispatch(uploadAvatar(file))
	}
	const InputStyles={
		root: {marginBottom: "10px"},
		input: {backgroundColor: "#313239",
		color: '#fff'},
		label: { color: '#fff' },
	}
	
	return (
		<div>
			<p className={s.headers}>Upload & Change Avatar</p>
			<Paper shadow="xs" p="xl" maw={500} className={s.paper}>
					<Text className={s.text}>
					Change your avatar. Your avatar is your identity, it will be seen by yourself when using our apps.
					</Text>	
					{/* <FileButton mr={20} color="#424242" className={s.button}
					onChange={e => changeHandler(e)} accept="image/png,image/	jpeg">
									{(props) => <Button {...props}>Upload image</Button>}
					</FileButton> */}
					<input  className={s.fileInput} id="change-avatar-input" type="file" onChange={e => changeHandler(e)} placeholder='Apload avatar' />
					<label htmlFor="change-avatar-input" className={s.uploadButton}>Upload Avatar</label>
					<Button  color="#802028" onClick={() => dispatch(deleteAvatar())}  >Delete 		Avatar</Button>
    </Paper>

		<p className={s.headers}>Update Personal Detais</p>
		<Paper shadow="xs" p="xl" className={s.paper} maw={500}>
			<TextInput
			 styles={{...InputStyles}}
				label="User Name"
				placeholder="User Name"
			/>
			<Button className={s.button}>Update</Button>
    </Paper>

		<p className={s.headers}>Change Email Address</p>
		<Paper shadow="xs" p="xl" className={s.paper} maw={500}> 
			<p className={s.text}>You will need to confirm the change by verifying the new email address aswell as your curr password</p>
			<p className={s.text}>Current email</p>
			<p className={s.bigText}>yura@gmail.com</p>
			<TextInput
			styles={{...InputStyles}}
				label="Your current password"
				placeholder="current password"
			/>
			<TextInput
			styles={{...InputStyles}}
				label="New email address"
				placeholder="email address"
			/>
			<Button className={s.button}>Update</Button>
    </Paper>

		<p className={s.headers}>Change Account Password</p>
		<Paper className={s.paper} shadow="xs" p="xl" maw={500}>
			<p className={s.text}>For security reasons, you are required to enter your old password to continue.</p>
			<TextInput
			styles={{...InputStyles}}
				label="Your current password"
				placeholder="current password"
			/>
			<TextInput
			styles={{...InputStyles}}
				label="New Password"
				placeholder="New Password"
			/>
			<TextInput
			styles={{...InputStyles}}
				placeholder="Confirm New Password"
			/>
			<Button className={s.button}>Update</Button>
    </Paper>
		</div>
	)
}

export default SettingsPage