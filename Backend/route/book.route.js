import express from "express";
import {getBook, setBook} from "../controller/book.controller.js";

const router = express.Router()

router.get("/get",getBook);
router.post("/set",setBook);

export default router;