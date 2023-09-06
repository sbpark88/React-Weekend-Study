import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
  },
  {
    collection: "Post", // Atlas > Database > Data Service > Collections > [DB_NAME] > [COLLECTION_NAME] 에 해당한다. DB 안에 각각 table 처럼 존재하는 collection 의 이름이 이 이름으로 정해진다.
  },
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema); // 대소문자 맞춰야한다.
export default Post;
