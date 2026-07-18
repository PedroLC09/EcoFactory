const request = require("supertest");
const app = require("../src/app");

describe("Rotas da API", () => {

    test("GET / deve retornar 200", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");

    });

    test("GET /machines deve retornar 200", async () => {

        const response = await request(app).get("/machines");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

    });

});

const pool = require("../src/database/connection");

afterAll(async () => {
    await pool.end();
});