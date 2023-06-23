import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MatLayout from './MatLayout'
import ScorePage from './ScorePage/ScorePage'
import React from 'react'
import TapGame from './TapGame'
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
