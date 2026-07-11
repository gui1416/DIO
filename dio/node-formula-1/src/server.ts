import fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { f1Routes } from "./routes/f1-routes";

const server = fastify({ logger: true });

// Segurança: Helmet para headers HTTP seguros
server.register(helmet);

// Segurança: Rate Limit para evitar ataques de força bruta/DoS
server.register(rateLimit, {
  max: 100,
  timeWindow: "1 minute"
});

// CORS: Configuração básica
server.register(cors, {
  origin: "*",
});

// OpenAPI/Swagger: Documentação
server.register(swagger, {
  openapi: {
    info: {
      title: "F1 Minimal API - DIO Challenge",
      description: "API de Fórmula 1 construída para o desafio da DIO com melhorias de segurança e documentação.",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3333",
        description: "Servidor Local"
      }
    ],
    tags: [
      { name: "Teams", description: "Endpoints relacionados às equipes" },
      { name: "Drivers", description: "Endpoints relacionados aos pilotos" },
      { name: "System", description: "Endpoints do sistema" }
    ]
  }
});

server.register(swaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "list",
    deepLinking: false
  }
});

// Registro das rotas
server.register(f1Routes);

// Inicialização do servidor
const start = async () => {
  try {
    await server.listen({ port: 3333, host: "0.0.0.0" });
    console.log("Server running at http://localhost:3333");
    console.log("Swagger UI available at http://localhost:3333/docs");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
