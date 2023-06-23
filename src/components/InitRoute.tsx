import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import BoardPage from './BoardPage'
import MatLayout from './MatLayout'
import ScorePage from './ScorePage/ScorePage'
import React from 'react'
import TapGame from './TapGame'
import TapBoardPage from './TapGamePage'
// import TapBoardContainer from './TapGame/TapBoardContainer'
// import TapBoardPage from './TapGame/TapBoardPage'

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
