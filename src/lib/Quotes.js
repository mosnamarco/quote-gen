import axios from "axios"

export const fetchData = async () => {
  return axios.get("http://localhost:5000/api/quotes").then(res => {
    return res.data
  }).catch(err => {
    console.error(err);
  });
}
