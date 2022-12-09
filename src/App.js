import './App.css';
import Home from './components/home/home'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from './components/cart/cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "cart",
        element: <Cart/>
    }

]);

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
