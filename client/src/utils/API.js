import axios from "axios";

export default {
  getstuffs: function() {
    return axios.get("/api/stuffs");
  },
  getStuff: function(id) {
    return axios.get("/api/stuff" + id);
  },

};
