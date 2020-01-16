import axios from "axios";

export default {
  // Gets all movies
  getTasks: function() {
    return axios.get("/api/saved");
  },
  // Gets the movie with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the movie with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a movie to the database
  saveTasks: function(taskData) {
    return axios.post("/api/saved", taskData);
  }
};
