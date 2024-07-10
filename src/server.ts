import fastify from 'fastify';
import { CreateTrip } from './routes/create-trip';
/* import { prisma } from './lib/prisma' */

const app = fastify();
app.register(CreateTrip);

/* app.get('/cadastrar', async () => {
  await prisma.trip.create({
    data: {
      destination: "Florianópolis",
      starts_at: new Date(),
      ends_at: new Date(),
    },
  })
  return'Cadastrar .log test route..'
})

app.get('/listar', async () => {
  const trips = await prisma.trip.findMany()
  return trips
}) */

app.listen({ port: 3333 }).then(() => {
  console.log('server running...');
})