

exports.createBlog = (req, res) => {
    res.status(200).json({ message: 'Blog created successfully' });
};

exports.readBlog = (req, res) => {
    res.status(200).json({ message: 'Blog read successfully' });
};

exports.updateBlog = (req, res) => {
    res.status(200).json({ message: 'Blog update successfully' });
};

exports.deleteBlog = (req, res) => {
    res.status(200).json({ message: 'Blog delete successfully' });
};