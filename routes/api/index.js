const router = require("express").Router();
const movieRoutes = require("./tasks");

router.use("/tasks", taskRoutes);

module.exports = router;
