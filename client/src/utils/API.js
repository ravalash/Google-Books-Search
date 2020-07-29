import axios from "axios";

// Google Books search API

export default {
  bookSearch: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  bookSave: async function(info) {
    console.log(info);
    try {
      const res = await axios({
          method: "POST",
          data: info,
          headers: {"Access-Control-Allow-Origin": "*"},
          // withCredentials: true,
          url: "http://localhost:3001/api/books",
      })
      console.log(res)
      if(res) {
          console.log(res);
      }
      }
      catch (error) {
          console.log(error);
          };
  }
};
