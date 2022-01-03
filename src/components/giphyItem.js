import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import styles from "./GiphyItem.module.css";

const GiphyItem = () => {
  const dispatch = useDispatch();
  const giphyElements = useSelector((state) => state.giphy.giphyElements);

  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  const changeAllGifsHandler = () => {
    dispatch(fetchGiphyData());
  };

  const lockGifHandler = (event) => {
    console.log(event);

    dispatch(
      giphyActions.lockGif({
        url: event.target.src,
        id: event.target.id,
        index: giphyElements.indexOf(
          giphyElements.find((val) => val.id === event.target.id)
        ),
      })
    );
    dispatch(giphyActions.isAnyLockedGif());
  };

  return (
    <>
      <button onClick={changeAllGifsHandler}>click here</button>
      <div>
        <ul className={styles.parent}>
          {giphyElements.map((val) => (
            <li onClick={lockGifHandler} key={val.id}>
              <img src={val.url} id={val.id} width="335px" height="260"></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GiphyItem;
