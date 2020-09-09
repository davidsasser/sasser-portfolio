var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	res.render('index');
});

router.get("/about", (req, res) => {
	res.render('about');
});

router.get("/projects", (req, res) => {
	res.render('projects');
});

router.get("/jobs", (req, res) => {
	res.render('jobs');
});

router.get("/contact", (req, res) => {
	res.render('contact');
});

module.exports = router;