import axios from "axios";

const KEY = "AIzaSyCcJRsnBOOTn_Ym9qxuCsE9JxcgizLwMso";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
