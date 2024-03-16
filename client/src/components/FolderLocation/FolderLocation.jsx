import React from 'react'
import { useSelector} from "react-redux";

import { Breadcrumbs, Anchor,} from "@mantine/core"
const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor 
	variant="gradient"
      gradient={{ from: '#B14BF4', to: '#B14BF4' }}
      fw={500}
      fz="lg"
     
			href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function FolderLocation() {
	const currentDir = useSelector(state => state.files.currentDir)
	return (
		<>
			<Breadcrumbs>{items}</Breadcrumbs>
			<button onClick={()=> console.log(currentDir)}>dsfs</button>
		</>
	)
}

export default FolderLocation