import styles from "../styles/Card.module.css";

const Card = (props) => {
  return <Card className={styles.card}>{props.children}</Card>;
};

export default Card;
