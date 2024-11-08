const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let users = [
  [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
    },
    {
      id: 5,
      name: "William Brown",
      email: "william.brown@example.com",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
    },
    {
      id: 7,
      name: "James Taylor",
      email: "james.taylor@example.com",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      email: "sophia.anderson@example.com",
    },
    {
      id: 9,
      name: "Benjamin Thomas",
      email: "benjamin.thomas@example.com",
    },
    {
      id: 10,
      name: "Isabella Martinez",
      email: "isabella.martinez@example.com",
    },
  ],
];

// tulis kode disini

// jawaban :
// app.post("/users", (req, res) => {
//   const user = {
//     id: users.length + 1,
//     name: req.body.name,
//     email: req.body.email,
//   };
//   users.push(user);
//   res.status(201).json(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
