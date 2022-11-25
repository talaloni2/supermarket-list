
import './App.css';
import Home from './components/home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetails from './components/item-details/ItemDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "item/:itemId",
    element: <ItemDetails />
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
