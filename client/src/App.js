import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Main from './pages/Main';
import Basket from './pages/Basket';
import CheckOut from './pages/CheckOut';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import ProductDetails from './pages/ProductDetails';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import './reset.css';
import ProductComparison from './pages/ProductComparison/ProductComparison';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-routes-wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:itemNo" element={<ProductDetails />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/comparison" element={<ProductComparison />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;