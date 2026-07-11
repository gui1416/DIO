import { FastifyInstance } from "fastify";
import * as f1Controller from "../controllers/f1-controller";

export async function f1Routes(fastify: FastifyInstance) {
  fastify.get("/health", {
    schema: {
      description: "Verifica a saúde da API",
      tags: ["System"],
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
            timestamp: { type: "string" }
          }
        }
      }
    }
  }, f1Controller.healthCheck);

  fastify.get("/teams", {
    schema: {
      description: "Lista todas as equipes de F1",
      tags: ["Teams"],
      response: {
        200: {
          type: "object",
          properties: {
            teams: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "integer" },
                  name: { type: "string" },
                  base: { type: "string" }
                }
              }
            }
          }
        }
      }
    }
  }, f1Controller.getTeams);

  fastify.get("/drivers", {
    schema: {
      description: "Lista todos os pilotos de F1",
      tags: ["Drivers"],
      response: {
        200: {
          type: "object",
          properties: {
            drivers: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "integer" },
                  name: { type: "string" },
                  team: { type: "string" }
                }
              }
            }
          }
        }
      }
    }
  }, f1Controller.getDrivers);

  fastify.get("/drivers/:id", {
    schema: {
      description: "Busca um piloto pelo ID",
      tags: ["Drivers"],
      params: {
        type: "object",
        properties: {
          id: { type: "string" }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            driver: {
              type: "object",
              properties: {
                id: { type: "integer" },
                name: { type: "string" },
                team: { type: "string" }
              }
            }
          }
        },
        404: {
          type: "object",
          properties: {
            message: { type: "string" }
          }
        }
      }
    }
  }, f1Controller.getDriverById);
}
