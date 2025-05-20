const homeController = {
    gethome : (req, res) => {
        res.render('home.ejs')
    }
}

module.exports = {
    home: (req, res) => {
        res.render('home.ejs')
    }
}