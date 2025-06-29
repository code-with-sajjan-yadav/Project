import Book from "../model/book.model.js";

export const setBook = async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;

    // if (!name || !title || !price || !category || !image) {
    //   return res.status(400).json({ error: "All fields are required" });
    // }
   const response = await Book.findOne({title:title});
    console.log(response);
    if (response) {
      return res.status(400).json({ error: "Book with this title already exists" });
    } 
    const book = new Book({ name, title, price, category, image });
    await book.save();

    console.log("Book created successfully");
    return res.status(200).json({ message: "Book created successfully", book });

  } catch (err) {
    console.error("Error in setBook controller:", err);
    return res.status(500).json({ error: "Error creating book" });
  }
};

export const getBook = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ books });
  } catch (error) {
    console.error("Error in getBook controller:", error);
    return res.status(500).json({ error: "Error fetching books" });
  }
};
