import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Account } from '../components/screens/account/account'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/account',
		element: <Account />,
	},
])
