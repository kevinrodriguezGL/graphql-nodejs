import mongoose = require('mongoose');
const { Schema, model } = mongoose;

export interface Author extends mongoose.Document {
  name: string;
  age: string;
}

export const AuthorSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default model<Author>('Author', AuthorSchema);
