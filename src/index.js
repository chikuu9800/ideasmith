import React from 'react'
import ReactDOM from 'react-dom/client'
import{
    RouterProvider
} from "react-router-dom"
import appRouting from './Routing'

// App
const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<RouterProvider router={appRouting}/>)
