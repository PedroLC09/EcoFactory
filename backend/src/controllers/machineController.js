const pool = require("../database/connection");

// LISTAR TODAS AS MÁQUINAS
exports.list = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM machines ORDER BY id"
        );

        return res.status(200).json(result.rows);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Erro ao listar máquinas."
        });

    }
};

// BUSCAR POR ID
exports.findById = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "SELECT * FROM machines WHERE id=$1",

            [id]

        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                message: "Máquina não encontrada."

            });

        }

        return res.status(200).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Erro ao buscar máquina."

        });

    }

};

// CADASTRAR
exports.create = async (req, res) => {

    try {

        const {

            name,

            sector,

            type,

            status,

            energy_consumption,

            temperature

        } = req.body;

        if (!name || !sector || !status) {

            return res.status(400).json({

                message:

                "Nome, setor e status são obrigatórios."

            });

        }

        const result = await pool.query(

            `INSERT INTO machines
            (
                name,
                sector,
                type,
                status,
                energy_consumption,
                temperature
            )
            VALUES($1,$2,$3,$4,$5,$6)
            RETURNING *`,

            [

                name,

                sector,

                type,

                status,

                energy_consumption || 0,

                temperature || null

            ]

        );

       return res.status(201).json({
       message: "Máquina cadastrada com sucesso.",
       data: result.rows[0]
    });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message:"Erro ao cadastrar."

        });

    }

};

// ATUALIZAR
exports.update = async (req,res)=>{

    try{

        const{id}=req.params;

        const{

            name,

            sector,

            type,

            status,

            energy_consumption,

            temperature

        }=req.body;

        const existe=await pool.query(

            "SELECT * FROM machines WHERE id=$1",

            [id]

        );

        if(existe.rows.length===0){

            return res.status(404).json({

                message:"Máquina não encontrada."

            });

        }

        const result=await pool.query(

            `UPDATE machines

            SET

            name=$1,

            sector=$2,

            type=$3,

            status=$4,

            energy_consumption=$5,

            temperature=$6

            WHERE id=$7

            RETURNING *`,

            [

                name,

                sector,

                type,

                status,

                energy_consumption,

                temperature,

                id

            ]

        );

        return res.status(200).json({
            message: "Máquina atualizada com sucesso.",
            data: result.rows[0]
        });

    }

    catch(error){

        console.error(error);

        return res.status(500).json({

            message:"Erro ao atualizar."

        });

    }

};

// EXCLUIR
exports.remove=async(req,res)=>{

    try{

        const{id}=req.params;

        const existe=await pool.query(

            "SELECT * FROM machines WHERE id=$1",

            [id]

        );

        if(existe.rows.length===0){

            return res.status(404).json({

                message:"Máquina não encontrada."

            });

        }

        await pool.query(
            "DELETE FROM productions WHERE machine_id = $1",
            [id]
        );

        await pool.query(

            "DELETE FROM machines WHERE id=$1",

            [id]

        );

        return res.status(200).json({

            message:"Máquina removida com sucesso.",
            data: result.rows[0]

        });

    }

    catch(error){

        console.error(error);

        return res.status(500).json({

            message:"Erro ao excluir."

        });

    }

};