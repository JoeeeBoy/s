const Router = require("express");
const { commController } = require("../twitter.controllers/comment.controllers");
const router = Router();


router.get("/comments", commController.getComment);
router.get("/comments/:id", commController.getIdComment);
router.post("/comments", commController.postComment);
router.delete("/comments/:id", commController.deleteComment);
router.patch("/comments/:id", commController.patchComment);

module.exports = router;