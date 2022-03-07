class NewsController {

    // [GET] /news
    index(req, res) {

        
        res.render('new')
    }

    // [GET] /news/:sluq
    show(req, res) {
        res.send('New Details!')


    }

}

module.exports = new NewsController