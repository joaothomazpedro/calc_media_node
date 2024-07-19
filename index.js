const prompt = require("prompt-sync")();

let materias = ['Português','Matemática','História','Geografia','Ciências']

materias.forEach(materias => {
    for (i = 0; i < 3; i++) {
        const pmpt_notas = +prompt(`Insira a ${i}ª nota: `);
    }    
});

/* Prompt para Cadastro de Alunos */
const pmpt_aluno = +prompt("Quantos alunos serão cadastrados: ");

function gerar_ra(){
    const min_value = 100000;
    const max_value = 999999;
    
    let ra_aluno = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    return ra_aluno
}

function cadastro_aluno(){
    
    for(i = 0; i < pmpt_aluno; i++)
    {
        let prp_aluno_cad = prompt("Cadastre um aluno: ");
        alunos.push(prp_aluno_cad,gerar_ra())
    }
}

const alunos = [
    {nome_aluno:cadastro_aluno(), registro_aluno:gerar_ra(), materias_cadastradas: materias}
]


