
import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetails from './components/ItemDetails';
import Poop from './components/Poop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "item/:itemId",
    element: <ItemDetails />
  },
  {
    path: "poop",
    element: <Poop />
  }

]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App;
