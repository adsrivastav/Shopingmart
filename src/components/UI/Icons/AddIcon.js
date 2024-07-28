import React from "react";
import styles from "./iconstyle.module.css"
const PlusIcon = ({ handleAdd }) => {
  return (
    <img
      onClick={handleAdd}
      src="https://cdn-icons-png.flaticon.com/128/3416/3416075.png" className={styles.cartaddremove}  
    />
  );
};

export default PlusIcon;
