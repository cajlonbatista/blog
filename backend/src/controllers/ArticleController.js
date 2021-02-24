const mongoose = require("mongoose");

const Article = mongoose.model("Article");

module.exports = {
    async index(req, res) {
        try {
            var { page } = req.query;
            const articles = await Article.paginate({}, { page, limit: 8 });
            articles.docs.reverse();
            return res.status(200).json(articles);
        } catch (error) {
            return res.status(401).json(error);
        }
    },
    async search(req, res) {
        try {
            var { tags } = req.params;
            const results = [];
            const articles = await Article.find();
            for (const article of articles) {
                if (article.description.toLowerCase().includes(tags.toLowerCase()) || article.title.toLowerCase().includes(tags.toLowerCase())) {
                    results.push(article);
                }
            }
            return res.status(200).json(results);
        } catch (error) {
            return res.status(401).json(error);
        }
    },
    async store(req, res) {
        try {
            const article = await Article.create(req.body);
            return res.status(201).json(article);
        } catch (error) {
            return res.status(401).json(error);
        }
    },
    async show(req, res) {
        try {
            const article = await Article.findById(req.params.id);
            return res.status(200).json(article);

        } catch (error) {
            return res.status(401).json(error);
        }
    },
    async update(req, res) {
        try {
            const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(201).json(article);
        } catch (error) {
            return res.status(401).json(error);
        }
    },
    async destoy(req, res) {
        try {
            const article = await Article.findByIdAndRemove(req.params.id);
            return res.status(201).send();
        } catch (error) {
            return res.status(401).json(error);
        }
    }
}