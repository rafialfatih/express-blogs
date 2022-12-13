# _Setup Prisma & Express & MySQL_

1. Install `npm install prisma typescript ts-node @types/node --save-dev`
2. Install `npm install express @types/express`
3. Install `npm install @prisma/client`
4. Jalankan `npx prisma`
5. Jalankan `npx prisma init --datasource-provider mysql`

# _Setup Database & Model_

1. Buat database mysql
2. Setup koneksi prisma dengan database di file _.env_
3. Buat model di dalam file _schema.prisma_
4. Jalankan `npx prisma migrate dev --name init`
5. Jalankan `npx prisma generate --watch`

# _Query Data Menggunakan Express_

1. Setup server express
2. Setup routes request
3. Setup scripts di _package.json_ `npx nodemon index.ts`
4. Jalankan `npm run dev`
