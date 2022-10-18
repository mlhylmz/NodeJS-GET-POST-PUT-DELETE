const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
})


const middleware = (_req, _res, next) => {
    console.log('Yeniistek geldi!');
    next()
  }
 
 
fastify.get("/hello", { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba GET isteği attınız !!")
});


fastify.post("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba POST isteği attınız !!")
})


fastify.put("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba PUT isteği attınız !!")
})


fastify.delete("/hello", { preHandler: [middleware] } ,  (req, reply) => {
    reply.send("Merhaba DELETE isteği attınız !!")
})


fastify.listen({port:2626}, (err, address) => {
    if(err) throw err;
})