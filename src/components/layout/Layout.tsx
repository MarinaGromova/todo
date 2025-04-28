import { useBackGroundResize } from '../../hooks/useBackGroundResize'
import { NewTodos } from '../newTodos/NewTodos'
import { Header } from './header/Header'

export const Layout = () => {
	const colorObject = useBackGroundResize()

	return (
		<div style={colorObject}>
			<Header />
			<NewTodos buttonText='TODO' />
			{/* <NewTodos buttonText="DONE" /> */}
		</div>
	)
}
