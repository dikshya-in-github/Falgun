const express = require("express")
const app = express()

let dbTodos = ["html", "css", "js", "react", "express"]

let isLoggedIn = false
let role = "seller"

function checkAuthentication(req, res, next) {
    if (isLoggedIn) {
        next()
    } else {
        console.log("check authentication")
        res.status(401).send("unauthenticated")
    }
}

function checkSellerRole(req, res, next) {
    console.log("check role")
    if (role === "seller") {
        console.log("login passed")
        next()
    } else {
        res.status(403).send("access forbidden")
    }
}

app.use(express.json())         //Global middleware
// app.use(checkAuthentication) //Global middleware
// app.use(checkSellerRole)     //Global middleware

/*API*/
app.get("/api/todos", function (req, res) {
    res.send(dbTodos)
})

app.post("/api/todos", checkAuthentication, function (req, res) {
    console.log("req.body", req.body)
    dbTodos.push(req.body.title)
    res.send("todos created.")
})

app.get("/api/products", function (req, res) {
    res.send("list of products")
})

/* 
    app.post("/api/products", checkAuthentication, checkSellerRole, function (req, res) { .........this is route level middleware
*/
app.post("/api/products", checkAuthentication, checkSellerRole, function (req, res) {
    res.send("products created")
})

app.listen(8000, () => {
    console.log("Server started")
})
