const router = require("express").Router();
const taskRoutes = require("./tasks");
const guestRoutes = require("./guests");
const songRoutes = require("./songs");
const helperRoutes = require("./helpers");

router.use("/task", taskRoutes);
router.use("/guest", guestRoutes);
router.use("/song", songRoutes);
router.use("/helper", helperRoutes);

module.exports = router;