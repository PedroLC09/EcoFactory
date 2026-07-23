const API_URL = "http://localhost:3000/machines";

let machines = [];
let editando = null;

const form = document.getElementById("machineForm");
const filtro = document.getElementById("filtroStatus");

if (form) {
    form.addEventListener("submit", salvarMaquina);
}

if (filtro) {
    filtro.addEventListener("change", atualizarTabela);
}

// =============================
// CARREGAR MÁQUINAS
// =============================
async function carregarMaquinas() {

    try {

        const response = await fetch(API_URL);

        machines = await response.json();

        atualizarTabela();

    }

    catch (error) {

        console.error(error);

        alert("Erro ao conectar com a API.");

    }

}

// =============================
// SALVAR
// =============================
async function salvarMaquina(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const setor = document.getElementById("setor").value.trim();

    const status = document.getElementById("status").value;

    if (!nome || !setor) {

        alert("Preencha todos os campos.");

        return;

    }

    const maquina = {

        name: nome,

        sector: setor,

        type: "Industrial",

        status: status,

        energy_consumption: 0,

        temperature: 0

    };

    try {

        if (editando === null) {

            await fetch(API_URL, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(maquina)

            });

        }

        else {

            await fetch(`${API_URL}/${editando}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(maquina)

            });

            editando = null;

        }

        form.reset();

        carregarMaquinas();

    }

    catch (error) {

        console.error(error);

        alert("Erro ao salvar.");

    }

}

// =============================
// TABELA
// =============================
function atualizarTabela() {

    const tabela = document.getElementById("machineTable");

    if (!tabela) return;

    tabela.innerHTML = "";

    let lista = [...machines];

    if (filtro && filtro.value !== "TODOS") {

        lista = lista.filter(

            maquina => maquina.status === filtro.value

        );

    }

    lista.forEach(maquina => {

        tabela.innerHTML += `

        <tr>

            <td>${maquina.name}</td>

            <td>${maquina.sector}</td>

            <td>${maquina.status}</td>

            <td>

                <button onclick="editar(${maquina.id})">

                    Editar

                </button>

                <button onclick="remover(${maquina.id})">

                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}

// =============================
// EDITAR
// =============================
function editar(id) {

    const maquina = machines.find(

        maquina => maquina.id == id

    );

    if (!maquina) return;

    document.getElementById("nome").value = maquina.name;

    document.getElementById("setor").value = maquina.sector;

    document.getElementById("status").value = maquina.status;

    editando = id;

}

// =============================
// REMOVER
// =============================
async function remover(id) {

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        carregarMaquinas();

    }

    catch (error) {

        console.error(error);

    }

}

// =============================
// INICIAR
// =============================
carregarMaquinas();