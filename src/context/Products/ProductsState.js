import { useReducer } from "react";
// import context API
import ProductsContext from "./ProductsContext";
// import reducer useReducer apply
import ProductsReducer from "./ProductsReducer";
// import firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
// import all type of action
import {
  SET_PRODUCTS,
  SET_ERROR,
  TOGGLE_LOADING,
  SET_FILTERED_PRODUCTS,
} from "./types";
//  Function component for product
const AuthState = ({ children }) => {
  const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    cartProducts: [],
    error: "",
  };

  // useReducer
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // function for show all product
  const getAllProducts = async () => {
    try {
      dispatch({ type: TOGGLE_LOADING });
      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(query(productsRef));

      const productsData = productsSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      dispatch({ type: SET_PRODUCTS, payload: productsData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

  // Function to filter and search products
  const filter = (filterObj) => {
    const {
      searchQuery,
      priceRange,
      categories: { mensFashion, womensFashion, jewelery, electronics },
    } = filterObj;

    let filteredProducts = state.products;
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    if (mensFashion || womensFashion || jewelery || electronics) {
      filteredProducts = filteredProducts.filter((product) => {
        if (mensFashion && product.category === "men's clothing") {
          return true;
        }
        if (womensFashion && product.category === "women's clothing") {
          return true;
        }
        if (electronics && product.category === "electronics") {
          return true;
        }
        if (jewelery && product.category === "jewelery") {
          return true;
        }
        return false;
      });
    }
//  price range filter
    if (priceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.price < priceRange;
      });
    }

    dispatch({ type: SET_FILTERED_PRODUCTS, payload: filteredProducts });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        filteredProducts: state.filteredProducts,
        loading: state.loading,
        getAllProducts,
        filter
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default AuthState;
