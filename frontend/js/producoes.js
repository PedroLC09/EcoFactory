const API_URL = "http://localhost:3000/machines";
const PRODUCTION_API = "http://localhost:3000/productions";

let productions = [];
let editandoProducao = null;

// =============================
// FORMULÁRIO
// =============================
const productionForm = document.getElementById("productionForm");

if (productionForm) {

    productionForm.addEventListener("submit", salvarProducao);

}

// =============================
// CARREGAR MÁQUINAS
// =============================
async function carregarSelectMaquinas() {

    const select = document.getElementById("maquina");

    if (!select) return;

    select.innerHTML = `

        <option value="">

            Selecione a Máquina

        </option>

    `;

    try {

        const response = await fetch(API_URL);

        const maquinas = await response.json();

        maquinas.forEach(maquina => {

            select.innerHTML += `

                <option value="${maquina.id}">

                    ${maquina.name}

                </option>

            `;

        });

    }

    catch (error) {

        console.error(error);

    }

}

// =============================
// CARREGAR PRODUÇÕES
// =============================
async function carregarProducoes() {

    const tabela = document.getElementById("productionTable");

    if (!tabela) return;

    try {

        const response = await fetch(PRODUCTION_API);

        productions = await response.json();

        atualizarProducoes();

    }

    catch (error) {

        console.error(error);

    }

}

// =============================
// TABELA
// =============================
function atualizarProducoes() {

    const tabela = document.getElementById("productionTable");

    if (!tabela) return;

    tabela.innerHTML = "";

    productions.forEach(prod => {

        const eficiencia = Number(

            (

                (prod.produced_quantity / prod.expected_quantity)

                * 100

            ).toFixed(2)

        );

        let classe = "eficiencia-baixa";

        if (eficiencia >= 90) {

            classe = "eficiencia-alta";

        }

        else if (eficiencia >= 70) {

            classe = "eficiencia-media";

        }

        tabela.innerHTML += `

        <tr>

            <td>${prod.product}</td>

            <td>${prod.machine_name}</td>

            <td>${prod.produced_quantity}</td>

            <td>${prod.expected_quantity}</td>

            <td class="${classe}">

                ${eficiencia}%

            </td>

            <td>

                <button onclick="editarProducao(${prod.id})">

                    Editar

                </button>

                <button onclick="removerProducao(${prod.id})">

                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}

// =============================
// SALVAR PRODUÇÃO
// =============================
async function salvarProducao(e) {

    e.preventDefault();

    const producao = {

        product: document.getElementById("produto").value.trim(),

        machine_id: Number(document.getElementById("maquina").value),

        produced_quantity: Number(document.getElementById("produzido").value),

        expected_quantity: Number(document.getElementById("meta").value),

        production_date: new Date().toISOString().split("T")[0]

    };

    try {

        if (editandoProducao === null) {

            await fetch(PRODUCTION_API, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(producao)

            });

        }

        else {

            await fetch(`${PRODUCTION_API}/${editandoProducao}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(producao)

            });

            editandoProducao = null;

        }

        productionForm.reset();

        carregarProducoes();

    }

    catch (error) {

        console.error(error);

        alert("Erro ao salvar produção.");

    }

}

// =============================
// EDITAR
// =============================
function editarProducao(id) {

    const producao = productions.find(

        p => p.id == id

    );

    if (!producao) return;

    document.getElementById("produto").value = producao.product;

    document.getElementById("maquina").value = producao.machine_id;

    document.getElementById("produzido").value = producao.produced_quantity;

    document.getElementById("meta").value = producao.expected_quantity;

    editandoProducao = id;

}

// =============================
// REMOVER
// =============================
async function removerProducao(id) {

    try {

        await fetch(`${PRODUCTION_API}/${id}`, {

            method: "DELETE"

        });

        carregarProducoes();

    }

    catch (error) {

        console.error(error);

    }

}

// =============================
// INICIAR
// =============================
carregarProducoes();

carregarSelectMaquinas();