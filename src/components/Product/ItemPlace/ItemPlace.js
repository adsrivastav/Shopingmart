import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductDetails from "../ProductContainer/ItemDetails/ItemDetails";
import ProductImage from "../ProductContainer/ItemImage/ItemImage";

// Product Card component
const ItemPlace = ({
  product: { title, price, image, id, quantity,rating },
  onOwnPage,
  onCart,
  removeProductFromCart,
  updateProductQuantity,
  filterProductFromState,
}) => {
  return (
    <ProductContainer>
      <ProductImage image={image} />
      <ProductDetails
        title={title}
        price={price}
        onOwnPage={onOwnPage}
        productId={id}
        onCart={onCart}
        quantity={quantity}
        rating={rating}
        removeProductFromCart={removeProductFromCart}
        updateProductQuantity={updateProductQuantity}
        filterProductFromState={filterProductFromState}
      />
    </ProductContainer>
  );
};

export default ItemPlace;
