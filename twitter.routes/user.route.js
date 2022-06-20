const Router = require("express");
const { userController } = require("../twitter.controllers/user.controllers");
const router = Router();


router.get("/users", userController.getUser);
router.get("/users/:id", userController.getIdUser);
router.post("/users", userController.postUser);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id", userController.patchUser);
router.patch("/users/:id/twits", userController.addTwit)
router.patch("/users/:id/saved", userController.addToSave)


module.exports = router;