import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFoundImage from './components/CartWidget/assets/notFound.jpg';
import Footer from "./Footer";
import  { CartProvider }  from "./components/Context/MyContext";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<div>
            <h1 className="text-center">404 NOT FOUND</h1>
            <img src={NotFoundImage} className="w-32 h-32 mx-auto" alt="404 Not Found"/></div>} />
        </Routes>
      </main>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
  