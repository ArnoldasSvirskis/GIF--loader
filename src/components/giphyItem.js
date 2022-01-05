import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import styles from "../styles/GiphyItem.module.css";
import { uiActions } from "../state/ui-slice";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const GiphyItem = () => {
  const dispatch = useDispatch();
  const giphyElements = useSelector((state) => state.giphy.giphyElements);
  const isGifActive = useSelector((state) => state.ui.isGifActive);
  const id = useSelector((state) => state.ui.isGifActive.index);

  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  const changeAllGifsHandler = () => {
    dispatch(fetchGiphyData());
  };

  const lockGifHandler = (event) => {
    dispatch(
      giphyActions.lockGif({
        url: event.target.src,
        id: event.target.id,
        index: giphyElements.indexOf(
          giphyElements.find((val) => val.id === event.target.id)
        ),
      })
    );
  };
  console.log(isGifActive);

  const makeGifActiveHandler = (event) => {
    dispatch(uiActions.makeGifActive(Number(event.target.name)));
    console.log(event.target.name);
  };

  return (
    <>
      <button onClick={changeAllGifsHandler}>click here</button>

      <div className={styles.parent}>
        {giphyElements.map((val, index) => (
          <button onClick={lockGifHandler} key={val.id}>
            <img
              className={id.includes(index) ? styles.clicked : styles.active}
              onClick={makeGifActiveHandler}
              src={val.url}
              id={val.id}
              name={index}
              width="335px"
              height="260"
            ></img>
          </button>
        ))}
      </div>
    </>
  );
};

export default GiphyItem;
