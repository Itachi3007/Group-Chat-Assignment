const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      default: () => {
        return uuidv4();
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
