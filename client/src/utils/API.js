import axios from "axios";

export default {
  // Gets all movies
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the movie with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the movie with the given id
  deleteTasks: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a movie to the database
  saveTasks: function(movieData) {
    return axios.post("/api/tasks", taskData);
  }
};
