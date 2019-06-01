function checkLogin (req, res, next) {
  if (!req.session.user) {
    req.flash('error', 'not login')
    return res.redirect('/sign')
  }
  next()
}

function checknotLogin(req, res, next) {
  if (req.session.user) {
    req.flash('error', 'already login')
    return res.redirect('back')
  }
  next()
}

module.exports = {
  checkLogin,
  checknotLogin
}