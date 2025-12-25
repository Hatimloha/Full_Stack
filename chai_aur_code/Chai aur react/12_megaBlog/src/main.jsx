import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import ReactDom from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import AddPost from './components/Pages/AddPost.jsx'
import Signup from './components/Pages/Signup.jsx'
import EditPost from './components/Pages/EditPost.jsx'
import AllPost from './components/Pages/AllPost.jsx'
import { AuthLayout, Login } from './components/index.js'
import Home from './components/Pages/Home.jsx'
import { RouterProvider as RounterProvider } from 'react-router-dom'


const rounter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
    ]
  }
])


ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RounterProvider router={rounter}/>
    <App />
  </Provider>,
)
