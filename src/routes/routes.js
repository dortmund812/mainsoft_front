import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import NotFound from '../pages/error/NotFound'
import Layout from '../pages/layout/Layout'
import Index from '../pages/index/Index'
import Search from '../pages/search/Search'
import History from '../pages/history/History'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/history',
                element: <History />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default routes