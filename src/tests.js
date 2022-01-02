import { URL } from "./state/constants";

const b = async () => {
  const response = await fetch(URL);
  const { data } = await response.json();
  console.log(data);

  return data;
};

b();

console.log(b);
