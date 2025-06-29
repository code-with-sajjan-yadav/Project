import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  title: {
    type: String,
   
  },
  price: {
    type: Number,
    
  },
  category: {
    type: String,
  
  },
  image: {
    type: String,
    
   
  },
} // Automatically adds createdAt and updatedAt fields
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
