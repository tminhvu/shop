import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='product/:id' element={<Product/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='productlist/:category' element={<ProductList/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
