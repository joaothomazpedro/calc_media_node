const prompt = require("prompt-sync")();

const alunos = {};

const materias = ['Português', 'Matemática', 'História', 'Geografia', 'Ciências']

function gerar_ra() {
    const min_value = 100000;
    const max_value = 999999;

    let ra_aluno = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    return ra_aluno
}

/* Prompt para Cadastro de Alunos */
let pmpt_aluno = +prompt("Quantos alunos serão cadastrados: ");

if (pmpt_aluno >= 1) {
    function cadastro_aluno() {
        let alunos_cadastrados = [];

        for (i = 0; i < pmpt_aluno; i++) {
            const nome_aluno_cad = prompt("Cadastre um aluno: ");
            const ra = gerar_ra()
            alunos_cadastrados.push({"Nome": nome_aluno_cad, "RA": ra,"Matérias" : materias})
        }
        return alunos_cadastrados
    }
}
else if(isNaN(pmpt_aluno)){
    console.log("Digite um valor válido")
    return
}
else {
    console.log("Digite um valor válido")
    return
}

teste = cadastro_aluno()

console.log(teste)




