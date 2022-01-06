import styles from "../styles/Navigation.module.css";
import { useDispatch } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  const changeAllGifsHandler = (event) => {
    console.log(event);

    dispatch(fetchGiphyData());
    if (event.key === "Enter") dispatch(fetchGiphyData());
  };

  return (
    <>
      <div className={styles.nav}>
        <h2>Arnoldas GIFs</h2>
        <div className={styles.navclick}>
          <h3>
            Press <p>spacebar</p> to shuffle or
          </h3>
          <button
            onKeyDown={changeAllGifsHandler}
            onClick={changeAllGifsHandler}
          >
            <p>Click here</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
