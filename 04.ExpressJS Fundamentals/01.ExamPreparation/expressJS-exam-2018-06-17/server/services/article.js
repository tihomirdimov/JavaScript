const Article = require('mongoose').model('Article');


async function getAll() {
    const articles = await Article.find({}).sort({ title: 'descending' });
    return articles;
}

async function create(data) {
    const title = data.title;
    const edits = [{ author: data.author, content: data.content }];
    return await Article.create({
        title,
        edits,
    });
}

async function getById(id) {
    const article = await Article.findById(id);
    const latestContent = article.edits.sort(function (a, b) {
        return b.creationDate - b.creationDate;
    });
    article.latestContent = latestContent[0].content;
    if (!article) {
        throw new Error(`Article not found: ${id}`);
    }
    return article;
}

async function updateArticle(id, content, author) {
    const currentEdits = Article.getById(id).edits;
    currentEdits.push({ author: author, creationDate: Date.now, content: content })
    try {
        Article.update({ '_id': id }, {
            '$set': {
                'edits': currentEdits
            }
        });
    }
    catch (err) {
        console.log(err.message)
        return;
    }
}

module.exports = {
    getAll,
    create,
    getById,
    updateArticle
};