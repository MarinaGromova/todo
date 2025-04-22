import { NewTodo } from '../newTodo/NewTodo'
import { Header } from './header/Header'

export const Layout = () => {
	return (
		<>
			<Header />
			<NewTodo buttonText='TODO' />
			{/* <NewTodo buttonText="DONE" /> */}
		</>
	)
}
