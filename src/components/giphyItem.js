import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/GiphyItem.module.css";
import { uiActions } from "../state/ui-slice";
import UnlockText from "./UnlockText";
import LockText from "./LockText";

const GiphyItem = () => {
  const dispatch = useDispatch();
  //gifs loaded from API
  const giphyElements = useSelector((state) => state.giphy.giphyElements);
  //indexes of locked gifs
  const id = useSelector((state) => state.ui.lockedGifs);
  const idOfLock = useSelector((state) => state.ui.showLock.index);

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

  const makeGifActiveHandler = (event) => {
    //sends index to state of locked gif
    dispatch(uiActions.sendLockedGifIndex(Number(event.target.name)));
    //removes styles/content of 'click to lock'
    dispatch(uiActions.removeLockOption(Number(event.target.name)));
  };

  const showLockHandler = (event) => {
    if (id.includes(Number(event.target.name))) return;
    dispatch(uiActions.showLockOption(Number(event.target.name)));
  };

  const removeLockHandler = (event) => {
    dispatch(uiActions.removeLockOption(Number(event.target.name)));
  };

  return (
    <>
      <div className={styles.parent}>
        {giphyElements.map((val, index) => (
          <button onClick={lockGifHandler} key={val.id}>
            {/* render conditionaly click to unlock */}
            {id.includes(index) ? <UnlockText /> : ""}
            {/* on mouseover, mouseleave event render "click to lock" */}
            {idOfLock.includes(index) ? <LockText /> : ""}

            <img
              className={id.includes(index) ? styles.clicked : styles.active} //change gif border style when hover or when it's clicked
              onClick={makeGifActiveHandler}
              onMouseOver={showLockHandler}
              onMouseLeave={removeLockHandler}
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
