const base64url = require('base64url')
const uuid = require('uuid').v4
const passport = require('passport')

class AuthController {
    passportCheck() {
    return passport.authenticate('webauthn', {
        failureMessage: true,
        failWithError: true,
    })
    }

    login(req, res) {
        res.render('auth/login')
    }

    admitUser(req, res, next) {
      res.json({ ok: true, destination: '/' })
    }

    denyUser(err, req, res, next) {
      const cxx = Math.floor(err.status / 100)
  
      if (cxx != 4) return next(err)
  
      res.json({ ok: false, destination: '/login' })
    }
    
    register(req, res) {
      res.render("auth/register");
    }

    createChallengeFrom(store) {
      return (req, res, next) => {
          const user = {
              id: uuid({}, Buffer.alloc(16)),
              name: req.body.email,
          }

          store.challenge(req, {user: user}, (err, challenge) => {
              if (err) return next(err)

              user.id = base64url.encode(user.id)

              res.json({
                  user: user,
                  challenge: base64url.encode(challenge),
              })
          })
      }
    }
  }
  
module.exports = AuthController;
  