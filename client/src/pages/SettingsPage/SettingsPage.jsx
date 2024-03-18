import React from 'react'
import { Text, Paper, TextInput, Button } from '@mantine/core';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import s from './styles.module.scss'
function SettingsPage() {
	const dispatch = useDispatch()

	function changeHandler(e) {
			const file = e.target.files[0]
			dispatch(uploadAvatar(file))
	}
	return (
		<div>
			<p className={s.headers}>Upload & Change Avatar</p>
			<Paper shadow="xs" p="xl" maw={500}>
      
      <Text>
			Change your avatar. Your avatar is your identity, it will be seen by yourself when using our apps.
      </Text>
			<button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
            <input accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Загрузить аватар"/>
    </Paper>

		<p className={s.headers}>Update Personal Detais</p>
		<Paper shadow="xs" p="xl">
			<TextInput
				label="User Name"
				placeholder="User Name"
			/>
			<Button>Update</Button>
    </Paper>

		<p className={s.headers}>Change Email Address</p>
		<Paper shadow="xs" p="xl">
			<p>You will need to confirm the change by verifying the new email address aswell as your curr password</p>
			<p>Current email</p>
			<p>yura@gmail.com</p>
			<TextInput
				label="Your current password"
				placeholder="current password"
			/>
			<TextInput
				label="New email address"
				placeholder="email address"
			/>
			<Button>Update</Button>
    </Paper>

		<p className={s.headers}>Change Account Password</p>
		<Paper shadow="xs" p="xl">
			<p>For security reasons, you are required to enter your old password to continue.</p>
			<TextInput
				label="Your current password"
				placeholder="current password"
			/>
			<TextInput
				label="New Password"
				placeholder="New Password"
			/>
			<TextInput
				placeholder="Confirm New Password"
			/>
			<Button>Update</Button>
    </Paper>
		</div>
	)
}

export default SettingsPage