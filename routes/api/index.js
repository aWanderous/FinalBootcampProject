const router = require("express").Router();
const taskRoutes = require("./tasks");
const guestRoutes = require("./guests");
const songRoutes = require("./songs");

router.use("/task", taskRoutes);
router.use("/guest", guestRoutes);
router.use("/song", songRoutes);

module.exports = router;