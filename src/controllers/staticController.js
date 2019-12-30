module.exports = {

  index(req, res, next) {
    res.render("static/index");
  },
  about(req, res, next){
    res.render("static/about");
  },
  contact(req, res, next){
    res.render("static/contactPage");
  },
  gallery(req, res, next){
    res.render("static/gallery");
  },

}