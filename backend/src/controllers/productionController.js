const pool = require("../database/connection");

// LISTAR TODAS AS PRODUÇÕES
exports.list = async (req, res) => {

    try {

        const result = await pool.query(`

            SELECT

                p.*,

                m.name AS machine_name

            FROM productions p

            JOIN machines m

            ON p.machine_id = m.id

            ORDER BY p.id

        `);

        return res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao listar produções."

        });

    }

};

// BUSCAR POR ID
exports.findById = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "SELECT * FROM productions WHERE id=$1",

            [id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                message: "Produção não encontrada."

            });

        }

        return res.status(200).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao buscar produção."

        });

    }

};

// CADASTRAR
exports.create = async (req, res) => {

    try {

        const {

            product,

            produced_quantity,

            expected_quantity,

            production_date,

            machine_id

        } = req.body;

        const result = await pool.query(

            `

            INSERT INTO productions(

                product,

                produced_quantity,

                expected_quantity,

                production_date,

                machine_id

            )

            VALUES($1,$2,$3,$4,$5)

            RETURNING *

            `,

            [

                product,

                produced_quantity,

                expected_quantity,

                production_date,

                machine_id

            ]

        );

        return res.status(201).json({

            message: "Produção cadastrada com sucesso.",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao cadastrar produção."

        });

    }

};

// ATUALIZAR
exports.update = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            product,

            produced_quantity,

            expected_quantity,

            production_date,

            machine_id

        } = req.body;

        const result = await pool.query(

            `

            UPDATE productions

            SET

            product=$1,

            produced_quantity=$2,

            expected_quantity=$3,

            production_date=$4,

            machine_id=$5

            WHERE id=$6

            RETURNING *

            `,

            [

                product,

                produced_quantity,

                expected_quantity,

                production_date,

                machine_id,

                id

            ]

        );

        return res.status(200).json({

            message: "Produção atualizada com sucesso.",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao atualizar produção."

        });

    }

};

// EXCLUIR
exports.remove = async (req, res) => {

    try {

        const { id } = req.params;

        await pool.query(

            "DELETE FROM productions WHERE id=$1",

            [id]

        );

        return res.status(200).json({

            message: "Produção removida com sucesso."

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao excluir produção."

        });

    }

};