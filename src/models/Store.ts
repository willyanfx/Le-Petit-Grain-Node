import mongoose, { Schema } from "mongoose";
import slug from "slugs";
interface IStore {
  name: string;
  slug: string;
  description?: string;
  tags?: string[];
}

const StoreSchema = new Schema<IStore>({
  name: { type: String, trim: true, required: true },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

StoreSchema.pre<IStore>("save", async function (next) {
  this.slug = slug(this.name);
  next();

  // TODO make more resiliant so slugs are unique
});

export { IStore };
export default mongoose.model<IStore>("Store", StoreSchema);
