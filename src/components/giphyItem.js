import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import styles from "./GiphyItem.module.css";

const GiphyItem = (props) => {
  const giphyData = useSelector((state) => state.giphy.giphyData);
  const dispatch = useDispatch();
  const giphyElements = useSelector((state) => state.giphy.giphyElements);

  console.log(giphyData);
  console.log(giphyElements);

  useEffect(() => {
    giphyElements.forEach((el) => {
      dispatch(fetchGiphyData());
    });
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <ul>
          {giphyData.map((val) => (
            <li className={styles.items} key={val.id}>
              <img src={val.url} width="200px" height="auto"></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GiphyItem;
