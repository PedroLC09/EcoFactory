const pool = require("../database/connection");

// LISTAR TODAS AS OCORRÊNCIAS
exports.list = async (req, res) => {

    try {

        const result = await pool.query(`

            SELECT

                s.*,

                m.name AS machine_name

            FROM safety_occurrences s

            JOIN machines m

            ON s.machine_id = m.id

            ORDER BY s.id

        `);

        return res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao listar ocorrências."

        });

    }

};

// BUSCAR POR ID
exports.findById = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "SELECT * FROM safety_occurrences WHERE id = $1",

            [id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                message: "Ocorrência não encontrada."

            });

        }

        return res.status(200).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao buscar ocorrência."

        });

    }

};

// CADASTRAR
exports.create = async (req, res) => {

    try {

        const {

            title,

            description,

            severity,

            responsible,

            occurrence_date,

            machine_id

        } = req.body;

        const result = await pool.query(

            `

            INSERT INTO safety_occurrences(

                title,

                description,

                severity,

                responsible,

                occurrence_date,

                machine_id

            )

            VALUES($1,$2,$3,$4,$5,$6)

            RETURNING *

            `,

            [

                title,

                description,

                severity,

                responsible,

                occurrence_date,

                machine_id

            ]

        );

        return res.status(201).json({

            message: "Ocorrência registrada com sucesso.",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao registrar ocorrência."

        });

    }

};

// ATUALIZAR
exports.update = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            title,

            description,

            severity,

            responsible,

            occurrence_date,

            machine_id

        } = req.body;

        const result = await pool.query(

            `

            UPDATE safety_occurrences

            SET

                title=$1,

                description=$2,

                severity=$3,

                responsible=$4,

                occurrence_date=$5,

                machine_id=$6

            WHERE id=$7

            RETURNING *

            `,

            [

                title,

                description,

                severity,

                responsible,

                occurrence_date,

                machine_id,

                id

            ]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                message: "Ocorrência não encontrada."

            });

        }

        return res.status(200).json({

            message: "Ocorrência atualizada com sucesso.",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao atualizar ocorrência."

        });

    }

};

// EXCLUIR
exports.remove = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "DELETE FROM safety_occurrences WHERE id = $1 RETURNING *",

            [id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                message: "Ocorrência não encontrada."

            });

        }

        return res.status(200).json({

            message: "Ocorrência removida com sucesso.",

            data: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao excluir ocorrência."

        });

    }

};