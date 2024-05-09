import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'boostrap/package.json'
import Home from '../component/Home';
import Profile from '../component/Profile';
import Shop from '../component/Shop';
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

const Root = () => {
  return (
    <>
    <header>
      <nav>
        <Link to={'/'}>Home </Link>
        <Link to={'/profile'}>Profile </Link>
        <Link to={'/shop'}>Shop </Link>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },

    ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
