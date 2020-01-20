const router = require("express").Router();
const helperController = require("../../controllers/helperController");

// Matches with "/api/helper"
router.route("/")
  .get(helperController.findAll)
  .post(helperController.create);

// Matches with "/api/helper/:id"
router
  .route("/:id")
  .get(helperController.findById)
  .put(helperController.update)
  .delete(helperController.remove);

module.exports = router;