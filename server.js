const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const PORT = 8000;
const prisma = new PrismaClient();

// post JSON Format.
app.use(express.json());

app.post("/", async (req, res) => {
  const { title, body } = req.body; // from postMan

  // モデル名を小文字でデータ挿入。
  const posts = await prisma.posts.create({
    data: {
      title: title,
      bode: body,
    },
  });

  return res.json(posts);
});

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

app.listen(PORT, () => {
  console.log("サーバーが起動中....");
});
