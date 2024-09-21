import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './routes/homepage/Homepage.jsx'
import ChatPage from './routes/chatPage/chatPage.jsx'

const router = createBrowserRouter([
   {
    element: <RootLayout/>,
    children:[
     { path:"/", element:<Homepage/>}
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
