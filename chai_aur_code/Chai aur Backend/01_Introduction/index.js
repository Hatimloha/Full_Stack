// Here we are creating a simple Express server

// iMPORT the .env file from the system 
require('dotenv').config()

// Import the express module from node file system
const express = require('express')

// Create an instance of express 
// Eg: it is like Math object in javascript which has many methods like Math.sqrt(), Math.pow() etc
const app = express()

// Define a port number where the server will listen
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('This is Twitter page') // sending response to client using
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login the chai aur code</h1>")
})

app.get("/youtube", (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})


const githubData = {
  "login": "Hatimloha",
  "id": 139457449,
  "node_id": "U_kgDOCE_zqQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/139457449?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Hatimloha",
  "html_url": "https://github.com/Hatimloha",
  "followers_url": "https://api.github.com/users/Hatimloha/followers",
  "following_url": "https://api.github.com/users/Hatimloha/following{/other_user}",
  "gists_url": "https://api.github.com/users/Hatimloha/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Hatimloha/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Hatimloha/subscriptions",
  "organizations_url": "https://api.github.com/users/Hatimloha/orgs",
  "repos_url": "https://api.github.com/users/Hatimloha/repos",
  "events_url": "https://api.github.com/users/Hatimloha/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Hatimloha/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hatimloha",
  "company": null,
  "blog": "https://hatimloha.github.io/Portfolio/",
  "location": "india",
  "email": null,
  "hireable": null,
  "bio": "Full Stack & DevOps Engineer | MERN Stack • Docker • CI/CD • Kubernetes • Aws • Ansible •Terraform • Networking | Building scalable apps & automating workflow",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-13T10:36:43Z",
  "updated_at": "2025-11-27T12:22:27Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})