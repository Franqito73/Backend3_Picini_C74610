import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API Rest - Adopciones",
      version: "1.0.0",
      description: "Documentación de la API — módulos Users y Pets",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Servidor local",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../routes/*.js"),
    path.join(__dirname, "../docs/*.yaml"),
  ],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
export { swaggerUi };
