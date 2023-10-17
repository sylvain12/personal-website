import { Elysia } from "elysia";
import { blog } from './app/blog';

const app = new Elysia()
.get("/", () => "Personal website version 2")
.use(blog)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
