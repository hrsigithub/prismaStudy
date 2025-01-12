Prisma Study

https://www.youtube.com/watch?v=9mE1j1vzUAQ&t=557s

-----
npm init -y
npm i prisma express nodemon @prisma/client

prisma 初期化
npx prisma init

--
DATABASE_URL="postgresql://postgres:[passward]]@db.qwyulnhywusbbctljfyp.supabase.co:5432/postgres"

マイグレート
npx prisma migrate dev --name init

テーブル確認
npx prisma studio
