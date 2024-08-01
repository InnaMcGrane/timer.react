import { useState } from "react";
import styles from "./button.module.css";

function Button({ text, handler }) {
  const [active, setStateActive] = useState(false);
  const clickCallback = () => {
    setStateActive(true)
    handler()
  }

  return <button className={`${styles["btn"]} ${styles["btn--save"]} ${active === true ? styles["btn--active"] : ""}`} onClick={clickCallback}>{text}</button>;
}

export default Button;
