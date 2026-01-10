require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata ={
  "login": "ommprasad-programmer",
  "id": 202361737,
  "node_id": "U_kgDODA_LiQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/202361737?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ommprasad-programmer",
  "html_url": "https://github.com/ommprasad-programmer",
  "followers_url": "https://api.github.com/users/ommprasad-programmer/followers",
  "following_url": "https://api.github.com/users/ommprasad-programmer/following{/other_user}",
  "gists_url": "https://api.github.com/users/ommprasad-programmer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ommprasad-programmer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ommprasad-programmer/subscriptions",
  "organizations_url": "https://api.github.com/users/ommprasad-programmer/orgs",
  "repos_url": "https://api.github.com/users/ommprasad-programmer/repos",
  "events_url": "https://api.github.com/users/ommprasad-programmer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ommprasad-programmer/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Omm Prasad Nath",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "a programmer\r\n",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-03-08T00:52:12Z",
  "updated_at": "2026-01-04T05:57:50Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {

    res.send('Omm prasad twitter handle is @ommprasad')
})
app.get('/about', (req,res) => {
    res.send('<h1>About Me</h1><p>I am Omm Prasad, a software developer specializing in web development.</p>')
})

app.get('/contact',(req,res) => {
    res.send('<div> contact me on instagram</div>')})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/github', (req,res) => {
    res.json(githubdata)
})