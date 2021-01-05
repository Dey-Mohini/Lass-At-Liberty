const express = require('express')
const passport = require('passport')
const router = express.Router()

//Google Auth...route for get call /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//Google auth callback...route for get call /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

// logout router for get call
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router