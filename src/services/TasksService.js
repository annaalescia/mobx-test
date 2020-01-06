import axios from "axios";

export const getToDos = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos?userId=1&completed=false")
    .catch(err => console.log(err));
};
