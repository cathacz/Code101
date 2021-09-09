const authorModel = require("../model/authorModel");
const AuthorModule = require("../model/authorModel");
const booksController = {};

booksController.getAll = async (req, res) => {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// {
//     authorName: String,
// books [{
//     title: String,
//     issueYear: Number
// }]
// }

booksController.addNewAuthor = async (req, res) => {
  const author = new authorModel({
    authorName: req.body.name,
  });
  req.body.books.map((book) => {
    author.books.push({ title: book.title, issueYear: book.issueYear });
  });
  try {
    await author.save();
    res.status(201).json({ message: "The Author has been added" });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
// Postman POST request
// {
//     "name": "Catha",
//     "books":[{"title":"Die götliche Tragödie", "issueYear":2022}, {"title":"People = $hit", "issueYear":2003}]
//       }

// GET one by id

booksController.getOneByID = async (res, req) => {
  try {
    const author = await AuthorModel.findByID(req.params.id);
    // const author = await AuthorModel.findONe({_id:req.params.id})
    res.status(200).json(author);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// DELETE one by id

booksController.deleteOneByID = async (res, req) => {
  try {
    const author = await AuthorModel.findOneByIDAndDelete(req.params.id);
    // const author = await AuthorModel.findONe({_id:req.params.id})
    res.status(200).json(author);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = booksController;
