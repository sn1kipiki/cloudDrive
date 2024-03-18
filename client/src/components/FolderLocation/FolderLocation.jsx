import React from 'react'
import { useSelector} from "react-redux";

import { Breadcrumbs, Anchor,} from "@mantine/core"
// const items = ;

function FolderLocation() {
	const path = useSelector(state => state.files.path)
	const pathStack = path ? ["MyCloudy", ...path.split("/")] : ["MyCloudy",]
	return (
		<>
			<Breadcrumbs>{
			pathStack.map((item, index) => (
				<Anchor 
				variant="gradient"
						gradient={{ from: '#B14BF4', to: '#B14BF4' }}
						fw={500}
						fz="lg"
					 
					 key={index}>
					{item}
				</Anchor>
			))
			}</Breadcrumbs>
		</>
	)
}

export default FolderLocation