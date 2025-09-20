const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routes/api');
const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

describe('API Routes', () => {
  it('GET /api/files returns list', async () => {
    const res = await request(app).get('/api/files').set('x-api-key', 'demo-key');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('files');
  });

  it('POST /api/upload unauthorized', async () => {
    const res = await request(app).post('/api/upload').send({ fileUrl: 'http://example.com/file.mp4' });
    expect(res.statusCode).toBe(401);
  });
});