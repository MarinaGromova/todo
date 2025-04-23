import { NewTodos } from '../newTodos/NewTodos'
import { Header } from './header/Header'

export const Layout = () => {
	return (
		<>
			<Header />
			<NewTodos buttonText='TODO' />
			{/* <NewTodos buttonText="DONE" /> */}
		</>
	)
}
