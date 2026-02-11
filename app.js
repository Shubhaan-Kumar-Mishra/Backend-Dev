import express from 'express';
import middleware from './middleware.js';
const app = express();
const port = 8000;
const users = [
  { id: 1, name: "shubh" },
  { id: 2, name: "dev" },
  { id: 3, name: "kanha" },
  { id: 4, name: "Sarthak" }
];

app.use(middleware);

app.get('/users', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.json(users);
  }
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(filteredUsers);
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:`, port);
});