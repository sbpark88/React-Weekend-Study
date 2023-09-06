import { connectMongoDB } from "@/libraries/MongoConnect";

export default async function handler(req, res) {
  try {
    await connectMongoDB();
    res.status(200).send("success");
  } catch (error) {
    res.status(400).send({ error });
  }
}
