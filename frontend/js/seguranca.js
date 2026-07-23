const API_URL = "http://localhost:3000/machines";
const SAFETY_API = "http://localhost:3000/safety";

let safetyOccurrences = [];
let editandoOcorrencia = null;

// =============================
// FORMULÁRIO
// =============================
const safetyForm = document.getElementById("safetyForm");

if (safetyForm) {

    safetyForm.addEventListener("submit", salvarOcorrencia);

}

// =============================
// CARREGAR MÁQUINAS
// =============================
async function carregarSelectMaquinasSeguranca() {

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
// CARREGAR OCORRÊNCIAS
// =============================
async function carregarOcorrencias() {

    const tabela = document.getElementById("safetyTable");

    if (!tabela) return;

    try {

        const response = await fetch(SAFETY_API);

        safetyOccurrences = await response.json();

        atualizarTabelaOcorrencias();

    }

    catch (error) {

        console.error(error);

        alert("Erro ao carregar ocorrências.");

    }

}

// =============================
// TABELA
// =============================
function atualizarTabelaOcorrencias() {

    const tabela = document.getElementById("safetyTable");

    if (!tabela) return;

    tabela.innerHTML = "";

    safetyOccurrences.forEach(ocorrencia => {

        tabela.innerHTML += `

        <tr>

            <td>${ocorrencia.title}</td>

            <td>${ocorrencia.machine_name}</td>

            <td>${ocorrencia.responsible}</td>

            <td>${ocorrencia.severity}</td>

            <td>${ocorrencia.occurrence_date}</td>

            <td>

                <button onclick="editarOcorrencia(${ocorrencia.id})">

                    Editar

                </button>

                <button onclick="removerOcorrencia(${ocorrencia.id})">

                    Excluir

                </button>

            </td>

        </tr>

        `;

    });

}

// =============================
// SALVAR
// =============================
async function salvarOcorrencia(e) {

    e.preventDefault();

    const ocorrencia = {

        title: document.getElementById("titulo").value.trim(),

        description: document.getElementById("descricao").value.trim(),

        severity: document.getElementById("gravidade").value,

        responsible: document.getElementById("responsavel").value.trim(),

        occurrence_date: document.getElementById("data").value,

        machine_id: Number(document.getElementById("maquina").value)

    };

    try {

        if (editandoOcorrencia === null) {

            await fetch(SAFETY_API, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(ocorrencia)

            });

        }

        else {

            await fetch(`${SAFETY_API}/${editandoOcorrencia}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(ocorrencia)

            });

            editandoOcorrencia = null;

        }

        safetyForm.reset();

        carregarOcorrencias();

    }

    catch (error) {

        console.error(error);

        alert("Erro ao salvar ocorrência.");

    }

}

// =============================
// EDITAR
// =============================
function editarOcorrencia(id) {

    const ocorrencia = safetyOccurrences.find(

        ocorrencia => ocorrencia.id == id

    );

    if (!ocorrencia) return;

    document.getElementById("titulo").value = ocorrencia.title;

    document.getElementById("descricao").value = ocorrencia.description;

    document.getElementById("gravidade").value = ocorrencia.severity;

    document.getElementById("responsavel").value = ocorrencia.responsible;

    document.getElementById("data").value = ocorrencia.occurrence_date;

    document.getElementById("maquina").value = ocorrencia.machine_id;

    editandoOcorrencia = id;

}

// =============================
// REMOVER
// =============================
async function removerOcorrencia(id) {

    try {

        await fetch(`${SAFETY_API}/${id}`, {

            method: "DELETE"

        });

        carregarOcorrencias();

    }

    catch (error) {

        console.error(error);

    }

}

// =============================
// INICIAR
// =============================
carregarOcorrencias();

carregarSelectMaquinasSeguranca();