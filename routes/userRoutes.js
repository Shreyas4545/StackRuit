import express from "express"
const router = express.Router()

// import controllers
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/BlogController.js"

router.route("/createBlog").post(createBlog)
router.route("/getBlog").get(getBlog);
router.route("/updateBlog/:id").put(updateBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);

export default router;