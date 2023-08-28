import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () =>
      await fetch(url)
        .then((response) => response.json())
        .catch((error) => error.json());
    try {
      const promise = use(getData());
      setData(promise);
    } catch (e) {
      setData(e);
    }
  }, [url]);
  return data;
};

const use = (promise) => {
  return () => {
    switch (promise.status) {
      case "fulfilled":
        return promise.value;
      case "rejected":
        throw promise.reason;
      case "pending":
        throw promise;
      default:
        promise.status = "pending";
        promise
          .then((value) => {
            promise.status = "fulfilled";
            promise.value = value;
          })
          .catch((error) => {
            promise.status = "rejected";
            promise.reason = error;
          });
        throw promise;
    }
  };
};
