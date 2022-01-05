import img from "../lock-icon.png";
import styles from "../styles/LockImg.module.css";

const LockText = () => {
  return (
    <div className={styles.unlock}>
      <img src={img}></img>
      <h4>Click to lock</h4>
    </div>
  );
};

export default LockText;
