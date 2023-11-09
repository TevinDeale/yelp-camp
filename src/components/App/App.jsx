import './App.css'
import Landing from '../Landing/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from '../Search/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  }, {
    path: "search-campsites",
    element: <Search />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
