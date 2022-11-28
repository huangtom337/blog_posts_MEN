const Blog = require('../models/blogSchema')

const blog_index = (req, res) => {
        // with try catch await
    // try {  
    //     const blogs = await Blog.findById('asdasd')
    //     res.render('index', {title: 'Home', blogs})
    // } catch (err) {
    //     console.log(err)
    //     res.redirect('404')
    // }
    
    //with then catch
    Blog.find()
        .then(result => {
            res.render('blogs/index', {title: 'All Blogs', blogs: result})
        })
        .catch(err => {
            console.log(err)
            res.redirect('404')
        })
}

const blog_details = (req, res) => {
    const id = req.params.id

    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', {title: 'Blog Details', blog: result})
        })
        .catch(err => {
            res.status(404).render('404', {title: 'Blog not found'})
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Create Blog'})
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then(result => {
            res.redirect('/blogs')
        })
        .catch(err => {
            console.log(err)
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id 
    
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}