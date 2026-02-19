import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app/app.module';
import request from 'supertest';

// SIMULATES IF THE API IS WORKING - ENTRYPOINT TEST
describe('General API', () => {
  let app: INestApplication;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let server: any;
  let teste = 2;

  async function setup() {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.setGlobalPrefix('api');

    await app.init();
    server = app.getHttpServer();
  }

  teste = teste + 1;

  beforeAll(async () => {
    await setup();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await request(server).get('/api');
      expect(response.status).toBe(200);
    });
  });
});
