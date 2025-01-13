Prisma Study

https://www.youtube.com/watch?v=9mE1j1vzUAQ&t=557s

-----
npm init -y
npm i prisma express nodemon @prisma/client

prisma 初期化
npx prisma init

--
.env

DATABASE_URL="postgresql://postgres:[passward]]@db.qwyulnhywusbbctljfyp.supabase.co:5432/postgres"

マイグレート
npx prisma migrate dev --name init

テーブル確認
npx prisma studio

---
起動

npm start
---
課題
prismaのマイグレーション方法を再度学ぶ必要ありかも？
 →カラム名の変更方法など。

リレーションは詳細を実施していないので再学習。