const router = require("express").Router();
const taskRoutes = require("./tasks");

router.use("/task", taskRoutes);

module.exports = router;