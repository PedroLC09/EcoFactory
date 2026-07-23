const API_URL = "http://localhost:3000/machines";

let machines = [];

// =============================
// CARREGAR MÁQUINAS
// =============================
async function carregarMaquinas() {

    try {

        const response = await fetch(API_URL);

        machines = await response.json();

        atualizarDashboard();

    }

    catch(error){

        console.error(error);

        alert("Erro ao conectar com a API.");

    }

}

// =============================
// DASHBOARD
// =============================
function atualizarDashboard(){

    const total = document.getElementById("totalMaquinas");

    if(total){

        total.textContent = machines.length;

    }

    const operacao = document.getElementById("operacao");

    if(operacao){

        operacao.textContent = machines.filter(

            maquina => maquina.status === "EM_OPERACAO"

        ).length;

    }

    const manutencao = document.getElementById("manutencao");

    if(manutencao){

        manutencao.textContent = machines.filter(

            maquina => maquina.status === "MANUTENCAO"

        ).length;

    }

    const parada = document.getElementById("paradas");

    if(parada){

        parada.textContent = machines.filter(

            maquina => maquina.status === "PARADA"

        ).length;

    }

}

// =============================
// INICIAR
// =============================
carregarMaquinas();