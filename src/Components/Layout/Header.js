import React from "react";
import image from "../../assets/Sweet.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sweet Corner</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;