import request from "supertest";
import app from "../app.js";

describe(" API Routes", () => {

   beforeAll(() => {
    console.log("Iniciando tests de adopciones...");
  });

  
  afterAll(() => {
    console.log("Tests de adopciones finalizados.");
  });

  
  it("GET /api/adoptions - devuelve lista de adopciones", async () => {
    const response = await request(app).get("/api/adoptions");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(Array.isArray(response.body.payload)).toBe(true);
  });

  
  it("POST /api/adoptions - crea una nueva adopción", async () => {
    const mockData = {
      userId: "6541abc123f0e3f97a5c2b9d",
      petId: "6541abc123f0e3f97a5c2b9f"
    };

    const response = await request(app)
      .post("/api/adoptions")
      .send(mockData);

    expect([200, 201]).toContain(response.statusCode);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body.payload).toHaveProperty("_id");
  });

  
  it("GET /api/adoptions/:id - devuelve error si la adopción no existe", async () => {
    const response = await request(app).get("/api/adoptions/000000000000000000000000");
    expect([400, 404]).toContain(response.statusCode);
    expect(response.body).toHaveProperty("status", "error");
  });

  
  it("DELETE /api/adoptions/:id - devuelve error si no existe", async () => {
    const response = await request(app).delete("/api/adoptions/000000000000000000000000");
    expect([400, 404]).toContain(response.statusCode);
    expect(response.body).toHaveProperty("status", "error");
  });
});
