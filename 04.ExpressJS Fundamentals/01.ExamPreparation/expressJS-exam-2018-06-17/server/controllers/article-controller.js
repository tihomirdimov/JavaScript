const articlesService = require('../services/article')

module.exports = {
    all: async (req, res) => {
        const articles = await articlesService.getAll();
        res.render('article/all', {articles} );
    },
    createGet: async (req, res) => {
        res.render('article/create');
    },
    createPost: async (req, res) => {
        const data = req.body;
        data.author = req.user._id;
        try {
            await articlesService.create(data);
            return res.redirect('/');
        } catch (err) {
            console.log(err);
            return res.render('article/create', { error: err.message });
        }
    },
    editGet: async (req, res) => {
        const article = await articlesService.getById(req.params.id);
        res.render('article/edit', {article});
    },
    editPost: async (req, res) => {
        const articleContent = req.body;
        await articlesService.updateArticle(req.params.id, articleContent, req.user._id);
        res.redirect('/');
    },
    history: async (req, res) => {
        res.render('article/history');
    },
    latest: async (req, res) => {
        res.render('article/latest');
    }, 
    search: async (req, res) => {
        res.render('article/search');
    },
    view: async (req, res) => {
        const article = await articlesService.getById(req.params.id);
        res.render('article/view', {article} );
    },
}