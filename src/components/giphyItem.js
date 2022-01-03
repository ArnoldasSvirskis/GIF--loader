import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import styles from "./GiphyItem.module.css";

const GiphyItem = () => {
  const giphyData = useSelector((state) => state.giphy.giphyData);
  const dispatch = useDispatch();
  const giphyElements = useSelector((state) => state.giphy.giphyElements);
  const lockedGifs = useSelector((state) => state.giphy.lockedGifEl);
  const lockedGifsIndex = useSelector((state) => state.giphy.lockedGifIndexes);

  console.log(giphyElements);
  console.log(lockedGifs);
  console.log(lockedGifsIndex);

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
    dispatch(giphyActions.isAnyLockedGif());
    console.log(event);
  };

  return (
    <>
      <div>
        <button onClick={changeAllGifsHandler}>click here</button>
        <ul>
          {giphyElements.map((val) => (
            <li onClick={lockGifHandler} key={val.id}>
              <img src={val.url} id={val.id} width="200px" height="auto"></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GiphyItem;
