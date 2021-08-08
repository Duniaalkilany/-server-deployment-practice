'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('API Server', () => {

    it('handles not found request', async () => {
      const response = await request.get('/dun');
      expect(response.status).toEqual(404);
    })
  
    it('handles errors', async () => {
      const response = await request.post('/bad');
      expect(response.status).toEqual(500);

    })
  
    it('/ works', async () => {
      const response = await request.get('/');
      expect(response.status).toEqual(200);
      console.log(response.text);
      expect(response.text).toEqual('Hello World :)');
    })
  
    it('/data works', async () => {
      const response = await request.get('/data');
      expect(response.status).toEqual(200);
      expect(typeof response.body).toEqual('object');
    })
  
    
  });