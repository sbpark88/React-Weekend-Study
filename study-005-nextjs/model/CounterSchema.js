import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
  {
    title: String,
    postNum: Number,
  },
  {
    collection: "Counter",
  },
);

const Counter =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema); // 대소문자 맞춰야한다.

export default Counter;
