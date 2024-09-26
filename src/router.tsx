import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import EditTransaction from './pages/EditTransaction'
import NewTransaction from './pages/NewTransaction'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/new',
		element: <NewTransaction />,
	},
  {
    path: '/edit',
    element: <EditTransaction />
  }
])

export default router
