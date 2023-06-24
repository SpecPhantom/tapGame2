import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MatLayout from './MatLayout'
import ScorePage from './ScorePage/ScorePage'
import TapBoardPage from './TapGamePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MatLayout />,
        children: [
            {
                path: '/',

                element: <TapBoardPage/>,
            },
            {
                path: 'scores',
                element: <ScorePage />,
            },
        ],
    },
])

function InitRoute() {
    return <RouterProvider router={router} />
}

export default InitRoute
