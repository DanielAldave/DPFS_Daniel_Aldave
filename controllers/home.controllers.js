const homeController = {
    gethome : (req, res) => {
        res.render('home.ejs')
    }
}

module.exports = homeController