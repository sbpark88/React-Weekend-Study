import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (!process.env.NEXT_PUBLIC_MONGO_URI)
    return console.error(
      ".env 의 'NEXT_PUBLIC_MONGO_URI' 값을 찾을 수 없습니다.",
    );
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
};
