import { describe, expect, test } from "@jest/globals";
import Collections from "../data/Collections";
import Counter from "./CounterSchema";

describe("Create new counter model test", () => {
  const COLLECTION_NAME = Collections.post;
  const NEXT_INDEX = 287;

  test("Empty count model.", () => {
    const obj = {};
    const model = new Counter(obj);

    expect(model?.get("id")).not.toBeNull();
  });

  test("The counter model has only collection name property.", () => {
    const obj = {
      collectionName: COLLECTION_NAME,
    };
    const model = new Counter(obj);

    expect(model?.collectionName).toEqual(obj.collectionName);
  });

  test("The counter model has all properties.", () => {
    const obj = {
      nextIndex: NEXT_INDEX,
      collectionName: COLLECTION_NAME,
    };
    const model = new Counter(obj);

    expect(model?.get("id")).not.toBeNull();
    expect([model?.collectionName, model?.nextIndex]).toEqual([
      obj.collectionName,
      obj.nextIndex,
    ]);
  });
});
