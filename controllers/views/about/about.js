module.exports = (app) => {

    app.get('/about', (req, res) => {

        res.render('pages/about/about')
    })
};