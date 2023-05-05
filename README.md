# Jobs API

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## About The Project

### Job management API using NodeJS, ExpressJS and MongoDB

![Preview](preview.png)

## API endpoints

**Main URL**: [https://jobs-api-qi0b.onrender.com/api-docs/](https://jobs-api-qi0b.onrender.com/api-docs/)

**Auth**

- Register User: [/auth/register](auth/register) [POST]
- Login User: [/auth/login](auth/login) [POST]

**Jobs**

- Get all jobs: [/jobs](/jobs?status=all&jobType=all&page=1) [GET]
- Create job: [/jobs](/jobs) [POST]
- Update job: [/jobs/:id](/jobs/:id) [PATCH]
- Delete job: [/jobs/:id](/jobs/:id) [DELETE]

#### installing Locally

1. Clone the repo

   ```sh
   git clone git@github.com:brunoanunciacaosouza/jobs-API.git
   ```

2. go to project folder

   ```sh
   cd jobify
   ```

3. install dependencies

   ```bash
   npm run install
   ```

4. Environmental Variables Set up

   - Here are the environmental variables that needs to be set in the `.env` file in the **server directory**.
   - These are the default setting that I used for development, but you can change it to what works for you.

   ```
     PORT=3000
     MONGO_URL=<Your mongodb url>
     JWT_LIFETIME=1d
     JWT_SECRET=<any secret value of your choice>
   ```

5. Run development server

   ```sh
   npm start
   ```
