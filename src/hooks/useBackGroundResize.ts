import { useEffect, useState } from 'react'

export const useBackGroundResize = () => {
	const [width, setWidth] = useState(768)
	const [background, setBackground] = useState('#00203f')
	const [color, setColor] = useState('#adefd1')
	const [textAdd, setTextAdd] = useState('+ add')

	useEffect(() => {
		const listener = () => {
			const width = window.innerWidth
			setBackground(width > 768 ? background : '#adefd1')
			setColor(width > 768 ? color : '#00203f')
			setTextAdd(width > 768 ? textAdd : '+')
			setWidth(width)
		}
		window.addEventListener('resize', listener)
	}, [])

	return { background: background, color: color, textAdd: textAdd }
}
