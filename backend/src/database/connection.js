require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({

    host: process.env.DB_HOST,

    port: process.env.DB_PORT,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});

async function testarConexao() {
    try {
        const resultado = await pool.query(`
            SELECT 
                p.product,
                p.produced_quantity,
                m.name
            FROM productions p
            JOIN machines m ON p.machine_id = m.id;
        `);

        console.log("✅ Banco PostgreSQL conectado!");
        console.log("📦 Dados recebidos do banco:");
        console.table(resultado.rows);

    } catch (erro) {
        console.error("❌ Erro na conexão:", erro.message);
    }
}

module.exports = pool;