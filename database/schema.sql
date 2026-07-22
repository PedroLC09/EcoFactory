CREATE DATABASE EcoFactory;

USE EcoFactory;

CREATE TABLE machines (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    sector VARCHAR(100) NOT NULL,

    type VARCHAR(100),

    status VARCHAR(30) NOT NULL CHECK (

        status IN (

            'EM_OPERACAO',

            'MANUTENCAO',

            'PARADA'

        )

    ),

    energy_consumption NUMERIC(10,2)

        DEFAULT 0

        CHECK (

            energy_consumption >= 0

        ),

    temperature NUMERIC(5,2),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE productions(

    id SERIAL PRIMARY KEY,

    product VARCHAR(100) NOT NULL,

    produced_quantity INTEGER NOT NULL CHECK(

        produced_quantity >=0

    ),

    expected_quantity INTEGER NOT NULL CHECK(

        expected_quantity>0

    ),

    production_date DATE NOT NULL,

    machine_id INTEGER NOT NULL,

    FOREIGN KEY(machine_id)

    REFERENCES machines(id)

    ON DELETE RESTRICT

    ON UPDATE CASCADE

);