import React from 'react'
import  s from './styles.scss'
import { useDisclosure } from '@mantine/hooks';
import { Stack,Dialog, Group, Button, TextInput, Text } from '@mantine/core';
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../reducers/uploadReducer";
import UploadFile from './UploadFile'
function Uploader() {
	const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()
		const [opened, { toggle, close }] = useDisclosure(false);
    return ( 
				<Dialog className={s.dialog} opened={isVisible} withCloseButton onClose={() => dispatch(hideUploader())} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Stack
              h={300}
              bg="var(--mantine-color-body)"

        >
            {files.map(file =>
                    <UploadFile key={file.id} file={file}/>
                )}
        </Stack>
      </Dialog>
				
	)
}

export default Uploader