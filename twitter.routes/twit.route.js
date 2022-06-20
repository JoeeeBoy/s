const Router = require("express");
const { twitController } = require("../twitter.controllers/twit.controllers");
const router = Router();

router.get("/twits", twitController.getTwit);
router.get("/twits/:id", twitController.getIdTwit);
router.post("/twits", twitController.postTwit);
router.patch("/twits/:id/comments", twitController.addToComm);
router.patch("/twits/:id/likes", twitController.addToLikes);
router.delete("/twits/:id", twitController.deleteTwit);
router.patch("/twits/:id", twitController.patchTwit);

module.exports = router;
