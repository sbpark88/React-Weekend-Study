import Counter from "@/model/CounterSchema";
import { INITIAL_NUM } from "@/data/Collections";

const getCounter = async (req, res, collectionName) => {
  try {
    const response = await Counter.findOne({
      collectionName: collectionName,
    }).exec();
    return response.get("nextIndex"); // 'get' 메서드를 통해 접근해야한다.
  } catch (error) {
    res.send(error);
  }
};

const createCounter = async (req, res, collectionName) => {
  try {
    const response = await Counter.create({
      collectionName: collectionName,
      nextIndex: INITIAL_NUM,
    }).exec();
  } catch (error) {
    res.send(error);
  }
};

const updateCounter = async (req, res, collectionName) => {
  try {
    const response = await Counter.updateOne(
      { collectionName: collectionName },
      { $inc: { nextIndex: 1 } },
    ).exec();
  } catch (error) {
    res.send(error);
  }
};

const deleteCounter = async (req, res, collectionName) => {};

export const fetchCounter = {
  GET: getCounter,
  POST: createCounter,
  PUT: updateCounter,
  DELETE: deleteCounter,
};
