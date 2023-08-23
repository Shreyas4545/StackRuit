import Blog from "../models/blog.js";
import bigPromise from "../middlewares/bigPromise.js"

export const createBlog = bigPromise(async (req, res) => {
    const { blogTitle, blogContent, blogAuthor, publicationDate } = req.body;
    const obj = { blogTitle, blogContent, blogAuthor, publicationDate }
    await Blog.create(obj).then((data) => {
        return res.status(200).json({
            success: true,
            data: data,
            message: "Successfully Created Blog"
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({
            success: true,
            message: `Internal Server Error + ${err}`
        })
    })
})

export const getBlog = bigPromise(async (req, res) => {
    const obj = {}
    if (req.query.publicationDate) {
        obj.publicationDate = req.query.publicationDate
    }
    if (req.query.id) {
        obj._id = req.query.id;
    }
    if (req.query.blogTitle) {
        obj.blogTitle = req.query.blogTitle
    }
    if (req.query.blogContent) {
        obj.blogContent = req.query.blogContent
    }
    if (req.query.blogAuthor) {
        obj.blogAuthor = req.query.blogAuthor
    }

    await Blog.find(obj).then((data) => {
        return res.status(200).json({
            success: true,
            data: data,
            message: "Succesfully Sent Blog Details"
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Internal Server Error + ${err}`
        })
    })
})

export const updateBlog = bigPromise(async (req, res) => {
    const { id } = req.params;
    const obj = {}
    if (req.body.publicationDate) {
        obj.publicationDate = req.body.publicationDate
    }
    if (req.body.blogTitle) {
        obj.blogTitle = req.body.blogTitle
    }
    if (req.body.blogContent) {
        obj.blogContent = req.body.blogContent
    }
    if (req.body.blogAuthor) {
        obj.blogAuthor = req.body.blogAuthor
    }

    await Blog.findOneAndUpdate({ _id: id }, { $set: obj }).then((data) => {
        return res.status(200).json({
            success: true,
            data: data,
            message: "Succesfully Updated Blog Details"
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Internal Server Error + ${err}`
        })
    })
})

export const deleteBlog = bigPromise(async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id).then((data) => {
        return res.status(200).json({
            success: true,
            message: "Succesfully Deleted Blog Details"
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Internal Server Error + ${err}`
        })
    })
})