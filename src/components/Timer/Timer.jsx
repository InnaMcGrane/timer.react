import { useState } from "react";
import styles from "./timer.module.css";
import Button from "../Button/Button";

function Timer() {
  const [hours, setStateHours] = useState(0);
  const [minutes, setStateMinutes] = useState(0);

  const handler = function() {
    setStateHours(0)
    setStateMinutes(0)
  }

  return (
    <div className={styles.timer}>
      <header className={styles.timer__header}>
        <input className={styles.timer__field} type="number" value={hours} onChange={(e) => {
          setStateHours(e.target.value)
        }}/>
        <span className={styles.timer__separator}>:</span>
        <input className={styles.timer__field} type="number" value={minutes} onChange={(e) => {
            setStateMinutes(e.target.value)
        }} />
      </header>

      <div className={styles.timer__scale}>
        <span className={styles["timer__scale-title"]}>Hours:</span>
        <input className={styles.timer__range} type="range" min="0" max="24" value={hours} step="1" onChange={(e) => {
            setStateHours(e.target.value)
        }} />
      </div>

      <div className={styles.timer__scale}>
        <span className={styles["timer__scale-title"]}>Minutes:</span>
        <input className={styles.timer__range} type="range" min="0" max="60" value={minutes} step="1" onChange={(e) => {
            setStateMinutes(e.target.value)
        }}/>
      </div>

      <Button text="save" handler={handler} />
    </div>
    );
}

export default Timer;
