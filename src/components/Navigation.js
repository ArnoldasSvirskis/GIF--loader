import styles from "../styles/Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import { giphyActions } from "../state/giphy-slice";
import { uiActions } from "../state/ui-slice";

const Navigation = () => {
  const lockedGifs = useSelector((state) => state.giphy.lockedGifEl);
  const isGifActive = useSelector((state) => state.ui.lockedGifs);
  const dispatch = useDispatch();
  //taking date from local storage
  const lockedGifsInStorage =
    JSON.parse(localStorage.getItem("lockedGifs")) || [];
  const lockedGifsUI = JSON.parse(localStorage.getItem("activeGifs")) || [];

  //checks if there is any data in local storage and loops trough array and puts in state
  useEffect(() => {
    if (lockedGifsInStorage.length === 0) return;
    else {
      lockedGifsInStorage.forEach((val) => dispatch(giphyActions.lockGif(val)));
    }

    if (lockedGifsUI.length === 0) return;
    else {
      lockedGifsUI.forEach((val) =>
        dispatch(uiActions.sendLockedGifIndex(val))
      );
    }
  }, []);

  //whenever we lock new gifs => we put that change in local storage
  useEffect(() => {
    localStorage.setItem("lockedGifs", JSON.stringify(lockedGifs));
    localStorage.setItem("activeGifs", JSON.stringify(isGifActive));
  }, [lockedGifs]);

  //fetch data from API when page loads
  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  //fetches new gifs when on click
  const changeAllGifsHandler = (event) => {
    dispatch(fetchGiphyData());
  };

  //because of some reason onkeydown react event doesnt't work, so used vanilla
  document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      dispatch(fetchGiphyData());
    }
  });

  return (
    <>
      <div className={styles.nav}>
        <h2>Arnoldas GIFs</h2>
        <div className={styles.navclick}>
          <h3>
            ❕💥 Press <p>spacebar</p> to shuffle or
          </h3>
          <button onClick={changeAllGifsHandler}>Click here</button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
