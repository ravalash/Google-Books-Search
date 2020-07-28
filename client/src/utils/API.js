import axios from "axios";

// Google Books search API

export default {
  bookSearch: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
};
