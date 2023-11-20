import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AllProducts from "./pages/AllProducts";
import AllSales from "./pages/AllSales";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import MainPage from "./pages/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import { useDispatch} from 'react-redux'
import { useEffect } from "react";
import { fetchCategories } from "./store/slice/categorySlice";
import { fetchProducts } from "./store/slice/productsSlice";

function App() {

  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])



  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CategoryProducts" element={<CategoryProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/category_products/:category" element={<AllProducts />} />
        <Route path="/AllSales" element={<AllSales />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
