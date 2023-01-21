const express = require("express");

const messageController = require("../controllers/messageController");

const router = express.Router();

/* /sendMessage => POST */
router.post("/sendMessage", messageController.sendMessage);

/* /getAllMessages => GET */
router.get("/getAllMessages", messageController.getAllMessages);

router.get(
  "/getAllMessagesPaginated",
  messageController.getAllMessagesPaginated
);

module.exports = router;
