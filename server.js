const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const PORT = 8000;
const prisma = new PrismaClient();

// post JSON Format.
app.use(express.json());

////
app.post("/", async (req, res) => {
  const { title, body } = req.body; // from postMan

  // モデル名を小文字でデータ挿入。
  const posts = await prisma.posts.create({
    data: {
      title: title,
      body: body,
    },
  });

  return res.json(posts);
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { body } = req.body; // from postMan

  console.log("body:", body);

  // モデル名を小文字でデータ挿入。
  const post = await prisma.posts.update({
    where: {
      id: Number(id),
    },
    data: {
      body: body,
    },
  });

  return res.json(post);
});

///////
app.get("/", async (req, res) => {
  const posts = await prisma.posts.findMany();

  return res.json(posts);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;

  const post = await prisma.posts.findUnique({
    where: {
      id: Number(id),
    },
  });

  return res.json(post);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const post = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  });

  return res.json(post);
});


app.listen(PORT, () => {
  console.log("サーバーが起動中....");
});
