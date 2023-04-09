import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './globalStyles/global'
import Home from './pages/Home';
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);

function App() {

  return (  
    <>
      <RouterProvider
       router={router}
      />
      <GlobalStyle/>
      <ToastContainer
       position="bottom-center"
      />
    </>
    )
}

export default App
