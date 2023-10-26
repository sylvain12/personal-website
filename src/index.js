import { Elysia } from "elysia";
import { blog } from './app/blog';
import { home } from './app/home';
const app = new Elysia()
    .use(home)
    .use(blog)
    .listen(3000);
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
