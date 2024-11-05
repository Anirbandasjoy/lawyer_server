import { Schema, model } from "mongoose";
import { IBlog } from "../types/blog.type";

const placeSchema = new Schema<IBlog>(
  {
    title_english: { type: String, required: true },
    title_bangla: { type: String, required: true },
    image: { type: String, required: true },
    description_english: { type: String, required: true },
    description_bangla: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Blog = model<IBlog>("Place", placeSchema);
export default Blog;