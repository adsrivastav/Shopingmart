import React, { useEffect, useState, useContext } from "react";
import styles from "./Home.module.css";
import Loader from "../../components/UI/Loader/Loader";
import ProductList from "../../components/Product/ItemList/Itemlist";
import ProductsContext from "../../context/Products/ProductsContext";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { auth } from "../../Firebase/firebase";// Make sure the path is correct
import { productsshop } from "../../data/ItemDB";
// Home page function component
function Home() {
  // useState() hook for initial state set and render automatically
  const [searchProduct, setsearch] = useState("");
  const [priceRange, setPriceRange] = useState(75000);
  const [categories, setCategories] = useState({
    mensFashion: false,
    electronics: false,
    jewelery: false,
    womensClothing: false,
  });

  // context API all props at one place 
  const {
    products,
    loading,
    getAllProducts,
    filteredProducts,
    filter,
  } = useContext(ProductsContext);

  // initial when component did mount all product show in the home page
  useEffect(() => {
    getAllProducts();
    productsshop();
    // initial render


  }, []);

  // filter the product list base on price and categories
  useEffect(() => {
    filter({ priceRange, searchQuery: searchProduct, categories });
  }, [priceRange, searchProduct, categories]);

  // loader when product fetching in home page
  if (loading) {
    return <Loader />;
  }

  // home page return the data filterbar searchbar
  return (
    <div className={styles.homePageContainer}>
      <FilterComponent
        setPriceRange={setPriceRange}
        setCategories={setCategories}
        priceRange={priceRange}
      />
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.searchInput}
          value={searchProduct}
          onChange={(e) => setsearch(e.target.value)}
        />
      </form>
     {/* product show as per filter apply productList component render  */}
      {products.length ? (
        <ProductList products={products.length ? filteredProducts : null} />
      ) : null}
    </div>
  );
}

export default Home;
