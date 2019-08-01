import mongoose = require('mongoose');
const { Schema, model } = mongoose;

export interface Book extends mongoose.Document {
  name: string;
  genre: string;
  authorId: string;
}

export const BookSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, required: true },
});

export default model<Book>('Book', BookSchema);
