import mongoose, { Schema } from "mongoose";
import slug from "slugs";

interface IStore {
  name: string;
  slug: string;
  description?: string;
  tags?: string[];
}

const storeSchema = new Schema<IStore>({
  name: { type: String, trim: true, required: true },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

export { storeSchema };
