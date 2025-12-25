import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout/>,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: 'about',
//       element: <About/>
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },
//     {
//       path: 'user',
//       element: <user:userid />
//     },
//     {
//       path: 'github',
//       element: 'github'
//     },
//   ]
// }])

// There is one more way to use react router: 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
