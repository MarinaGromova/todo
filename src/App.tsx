import './assets/styles/index.scss'
import { Layout } from './components/layout/Layout'
import { Account } from './components/screens/account/account'
import { NewTodos } from './components/screens/newTodos/NewTodos'
import { useBackGroundResize } from './hooks/useBackGroundResize'

function App() {
	const colorObject = useBackGroundResize()

	return (
		<div style={colorObject}>
			<Layout />
			<NewTodos />
			<Account />
		</div>
	)
}

export default App
