import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Navigations from "./Components/Shared/Navigations/Navigations";
import Footer from "./Components/Shared/Footer/Footer";
import Shop from "./Components/Pages/Shop/Shop";
import Contact from "./Components/Pages/Contact/Contact";
import Faq from "./Components/Pages/Faq/Faq";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Components/Pages/Login/Login";
import ScrollToTop from "react-scroll-to-top";
import Register from "./Components/Pages/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <div>
      <ScrollToTop smooth color="orangered"/>
      </div>
      <AuthProvider>
      <BrowserRouter>
      <Navigations></Navigations>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/shop" element={<PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>}></Route>
          <Route path="/productdetials/:id" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/registration" element={<Register></Register>}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
