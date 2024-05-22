import React from 'react'
import {Text,  Progress} from '@mantine/core';
import {useDispatch, useSelector} from "react-redux";
import sizeFormat from '../../utils/sizeFormat'
import { scaleBytesToRange } from '../../utils/scaleBytesToRange'
function StorageFull() {
	const currntUser = useSelector(state => state.user.currentUser)
	return (
		<div style={{marginTop:"auto"}}>
            <Text size="sm" fw={300} mb={10}>{sizeFormat(currntUser.usedSpace) }</Text>
            <Progress value={scaleBytesToRange(currntUser.usedSpace)} />
    </div>
	)
}

export default StorageFull