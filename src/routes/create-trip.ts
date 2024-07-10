import { FastifyInstance } from "fastify";

export async function CreateTrip(app: FastifyInstance) {
  app.post('/', async () => {
    return 'Hello Word'
  })
}