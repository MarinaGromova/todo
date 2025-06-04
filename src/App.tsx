import './assets/styles/index.scss'
import { Layout } from './components/layout/Layout'
import { NewTodos } from './components/screens/newTodos/NewTodos'
import { useBackGroundResize } from './hooks/useBackGroundResize'

function App() {
	const colorObject = useBackGroundResize()

	return (
		<div style={colorObject}>
			<Layout />
			<NewTodos />
		</div>
	)
}

export default App
