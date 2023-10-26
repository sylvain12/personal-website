import { Elysia } from 'elysia';
export const home = new Elysia().get('/', () => 'Home page');
