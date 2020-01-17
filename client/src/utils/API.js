import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/task");
  },
  // Gets the tasks with the given id
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  // Saves a task to the database
  saveTasks: function(listData) {
    return axios.post("/api/task", listData);
  }
};
