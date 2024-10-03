import express from 'express';
import { Router } from 'itty-router';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const app = express();
const router = Router();

router.get('/', (request) => {
  return new Response(createReadStream(join(__dirname, 'public', 'index.html')), {
    headers: { 'Content-Type': 'text/html' },
  });
});

app.use(express.static('public'));

app.use((request, env, ctx) => {
  return router.handle(request, env, ctx);
});

export default app;
