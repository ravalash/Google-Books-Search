import axios from "axios";

// Google Books search API

export default {
  bookSearch: function (search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  bookSave: async function (info) {
    console.log(info);
    try {
      const result = await axios({
        method: "POST",
        data: info,
        url: "http://localhost:3001/api/books",
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
  bookLoad: async function () {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3001/api/books",
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
  bookDelete: async function (id) {
    console.log(id);
    try {
      const result = await axios({
        method: "DELETE",
        url: `http://localhost:3001/api/books/${id}`,
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
