import express from "express";
import {
  deleteBook,
  getAllBooks,
  singleBook,
  updateBookData,
  uploadBook,
} from "../controllers/book.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - title
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of the book collection
 *        title:
 *          type: string
 *          description: Book title
 *        author:
 *          type: string
 *          description: Book author
 *        category:
 *          type: string
 *          description: Book category
 *        description:
 *          type: string
 *          description: Book description
 *        isbn:
 *          type: string
 *          description: Book ISBN
 *      example:
 *        id: GDHJGD788BJBJ
 *        title: book1
 *        author: book author
 *        category: technology
 *        description: book content
 *        isbn: 1234587328175
 */

/**
 * @swagger
 * /api/upload-book:
 *   post:
 *     summary: Upload a new book
 *     description: Upload a new book to the library
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       '200':
 *         description: Book uploaded successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

router.post("/upload-book", uploadBook);

/**
 * @swagger
 * /api/book/{id}:
 *   patch:
 *     summary: Update book data
 *     description: Update data of a specific book by its ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       '200':
 *         description: Book data updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Book not found
 */

router.patch("/updatebook/:id", updateBookData);

/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Delete a specific book by its ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book to delete
 *     responses:
 *       '200':
 *         description: Book deleted successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Book not found
 */

router.delete("/book/:id", deleteBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books in the library
 *     tags:
 *       - Books
 *     responses:
 *       '200':
 *         description: List of books retrieved successfully
 *       '500':
 *         description: Internal server error
 */

router.get("/books", getAllBooks);

/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     summary: Get a single book
 *     description: Retrieve data of a specific book by its ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book to retrieve
 *     responses:
 *       '200':
 *         description: Book data retrieved successfully
 *       '404':
 *         description: Book not found
 */

router.get("/singlebook/:id", singleBook);

export default router;
