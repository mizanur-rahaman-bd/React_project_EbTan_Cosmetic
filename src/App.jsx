
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'

function App() {

  const MyRoutes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element = {<LayoutOne />} >
         <Route index element ={<Home />} />
      
      </Route>

    </Route>
  ))
  

  return (
    <>

    <RouterProvider router={MyRoutes} />
      
    </>
  )
}

export default App
