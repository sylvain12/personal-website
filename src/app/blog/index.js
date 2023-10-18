import { Elysia } from 'elysia';
export const blog = new Elysia({ prefix: '/blog' })
    .get('/', () => 'Blog Home');
