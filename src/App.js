import './App.css';
import Home from './components/home/home'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from './components/cart/cart';
import {v4 as uuidv4} from 'uuid'

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
    if (localStorage.getItem("cartId") === null){
        localStorage.setItem("cartId", uuidv4())
    }
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
