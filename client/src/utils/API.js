import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/task");
  },
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  saveTasks: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  updateTask: function(id, helper) {
    return axios.put("/api/task/"+id, helper);
  },
  // Gets all guests
  getGuests: function() {
    return axios.get("/api/guest");
  },
  deleteGuest: function(id) {
    return axios.delete("/api/guest/" + id);
  },
  saveGuest: function(guestData) {
    return axios.post("/api/guest", guestData);
  },
  // Gets all songs
  getSongs: function() {
    return axios.get("/api/song");
  },
  deleteSong: function(id) {
    return axios.delete("/api/song/" + id);
  },
  saveSong: function(songData) {
    return axios.post("/api/song", songData);
  }
};
