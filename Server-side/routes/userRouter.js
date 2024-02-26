const express = require("express");
const userController = require("../controller/userController");

// router middelware
// connect controller with models 
const router = express.Router();


router.route("/").get(userController.getUsers).post(userController.createUser);

router.route("/:id").get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);


module.exports = router;