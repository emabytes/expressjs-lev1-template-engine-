const express = require("express")
const app = express()
const menu = require("./menu.json")
const data = require("./data.json")

app.set("view engine", "ejs")

app.listen(5002, () => {
    console.log("server at http://localhost:5002")
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index", { title: 'Home page', menu: menu })
})
app.get("/team", (req, res) => {
    res.render("team", { title: 'Team page', menu: menu })
})
app.get("/about", (req, res) => {
    res.render("about", { title: 'About page', menu: menu })
})
app.get("/contact", (req, res) => {
    res.render("contact", { title: 'Contact page', menu: menu })
})
app.get("/gallery", (req, res) => {
    res.render("gallery", { title: 'Gallery page', menu: menu, galleryData: data })
})


app.use((req, res) => {
    res.render('404', { title: 'Not found' })
})