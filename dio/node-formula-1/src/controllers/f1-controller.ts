import { FastifyRequest, FastifyReply } from "fastify";
import { teams, drivers } from "../data/f1-data";

export const getTeams = async (request: FastifyRequest, reply: FastifyReply) => {
  return { teams };
};

export const getDrivers = async (request: FastifyRequest, reply: FastifyReply) => {
  return { drivers };
};

export const getDriverById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    return reply.status(404).send({ message: "Driver Not Found" });
  }

  return { driver };
};

export const healthCheck = async (request: FastifyRequest, reply: FastifyReply) => {
  return { status: "ok", timestamp: new Date().toISOString() };
};
