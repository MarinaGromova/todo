import { Route, Routes } from 'react-router-dom'
import { routes } from './routes.data'

function Router() {
	return (
		<Routes>
			{routes.map((route: any) => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={<route.Component />}
					/>
				)
			})}
		</Routes>
	)
}

export default Router
