import React from "react";
import styles from "./iconstyle.module.css";
const MinusIcon = ({ handleRemove }) => {
  return (
    <img
      onClick={handleRemove}
      src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="minus" className={styles.cartaddremove}
    />
  );
};

export default MinusIcon;
