import React, { useEffect, useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/signIn/signIn";
import RegisterPage from "./pages/signUp/signUp";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/Cart/Cart";
import OrdersPage from "./pages/Orderd/ordered";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthContext from "./context/Auth/AuthContext";
import ProductsContextProvider from "./context/Products/ProductsState";
import Home from "./pages/Home/Home";

function App() {
  const auth = getAuth();

  const { setAuthUser } = useContext(AuthContext);

  // Authenticate the user if he is already logged in and set the user in the auth context.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      }
    });
  }, []);

  return (
    <div className="App">
      <ProductsContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" exact element={<RegisterPage />} />
          <Route path="/signin" exact element={<LoginPage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/myorders" exact element={<OrdersPage />} />
          {/* NotFoundPage would be rendered if an invalid route is tried to access */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
