const router = require("express").Router();
const taskRoutes = require("./tasks");
const guestRoutes = require("./guests");

router.use("/task", taskRoutes);
router.use("/guest", guestRoutes);

module.exports = router;