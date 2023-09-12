import { connectMongoDB } from "@/libraries/MongoConnect";
import Counter from "@/model/CounterSchema";
import Post from "@/model/PostSchema";
import { fetchCounter } from "@/pages/api/counter";
import Collections, { INITIAL_NUM } from "@/data/Collections";
import { isNumber } from "@/utils/NumberUtils";

export default async function handler(req, res) {
  try {
    await connectMongoDB();
    fetchPost[req.method](req, res);
  } catch (error) {
    res.send({ success: false, error });
  }
}

const getPost = async (req, res) => {
  try {
    const response = await Post.find({}).exec();
    res.send({ success: true, response });
  } catch (error) {
    res.send({ success: false, error });
  }
};

const createPost = async (req, res) => {
  let postNum;
  try {
    const index = await fetchCounter.GET(req, res, Collections.post);
    if (isNumber(index)) {
      postNum = index;
    } else {
      postNum = INITIAL_NUM;
      await fetchCounter.POST(req, res, Collections.post);
    }
    const postDto = { ...req.body, postNum: postNum };
    const postModel = new Post(postDto);
    const response = await postModel.save();
    await fetchCounter.PUT(req, res, Collections.post);
    res.send({ success: true, response });
  } catch (error) {
    res.send({ success: false, error });
  }
};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

const fetchPost = {
  GET: getPost,
  POST: createPost,
  PUT: updatePost,
  DELETE: deletePost,
};
