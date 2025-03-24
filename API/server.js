import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express(); // Criando variável - express
app.use(express.json()); // indicando que irá receber arquivos em json
app.use(cors());

app.get("/usuarios", async (req, res) => {
  let users = [];

  // Filtrando querys
  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        age: req.query.age,
        email: req.query.email,
      },
    });
  } else {
    // Listar todos usuarios
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).send(req.body);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: rq.params.id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

app.listen(3000);
// murilo | 9c0JCJyQjIblC4kA
