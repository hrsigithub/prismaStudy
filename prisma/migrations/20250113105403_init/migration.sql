-- CreateTable
CREATE TABLE "Commnent" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Commnent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commnent" ADD CONSTRAINT "Commnent_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
