const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Blog = require('../models/Blog')
router.get('/', ensureGuest, (req, res) => {
  res.render('../views/layouts/home', {
    layout: 'home',
  })
})

router.get('/home', ensureAuth, (req, res) => {
  res.render('../views/layouts/homelogin', {
     layout: 'homelogin',
  })
})
router.get('/editorial', ensureAuth, (req, res) => {
  res.render('../views/layouts/editorial', {
     layout: 'editorial',
  })
})
router.get('/login', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      
      name: req.user.firstName,
      blogs,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

module.exports = router