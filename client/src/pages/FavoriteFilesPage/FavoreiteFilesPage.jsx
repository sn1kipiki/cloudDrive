import React, {useEffect, useState} from 'react'
import s from './styles.module.scss'
import FilesField from '../../components/FilesField/FilesField'
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FavoriteFilesField from '../../components/FavoriteFilesField/FavoriteFilesField'
function FavoreiteFilesPage() {

	return (
		
		<FavoriteFilesField/>
	)
}

export default FavoreiteFilesPage