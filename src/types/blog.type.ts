import { Document } from "mongoose";

export interface IBlog extends Document {
  title_english: string;
  title_bangla: string;
  image: string;
  description_english: string;
  description_bangla: string;
  category: string;
}
