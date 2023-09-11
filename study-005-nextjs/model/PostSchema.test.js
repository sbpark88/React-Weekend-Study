import { describe, expect, test } from "@jest/globals";
import Post from "./PostSchema";

describe("Create new post model test.", () => {
  const TITLE = "This is a title";
  const CONTENT = "viewport meta tags should not be used in _document.js";
  const POST_NUM = 3276;

  test("Empty post model.", () => {
    const obj = {};
    const model = new Post(obj);

    expect(model?.get("id")).not.toBeNull();
  });

  test("The post model has only title property.", () => {
    const obj = {
      title: TITLE,
    };
    const model = new Post(obj);

    expect(model?.get("id")).not.toBeNull();
    expect(model?.title).toEqual(obj.title);
  });

  test("The post model has all properties.", () => {
    const obj = {
      title: TITLE,
      content: CONTENT,
      postNum: POST_NUM,
    };
    const model = new Post(obj);

    expect(model?.get("id")).not.toBeNull();
    expect([model?.title, model?.content, model?.postNum]).toEqual([
      obj.title,
      obj.content,
      obj.postNum,
    ]);
  });
});
