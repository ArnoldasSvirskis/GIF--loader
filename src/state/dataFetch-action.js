import { URL } from "./constants";

export const fetchGiphyData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);

      if(!response.ok) {throw new Error ('failed to get data')}

      const data = await response.json();
      return data;
    };

    try {
        fetchData().
    }

  };
};
