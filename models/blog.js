import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String
    },
    blogContent: {
        type: String
    },
    blogAuthor: {
        type: String
    },
    publicationDate: {
        type: Date
    }
})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;