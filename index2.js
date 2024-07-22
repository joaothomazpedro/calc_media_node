/* Requisito de biblioteca */
const prompt = require("prompt-sync")();

/* Inicialização de variáveis */
let aluno = [];
const materia = [];

novo_aluno = {
    nome: aluno,
    materias: materia
};

/* Começo da interface */
while (true) {
    const quest = prompt("Deseja cadastrar um aluno? [Y/N]: "); /* Prompt Inicial */

    if (quest == "y" || quest == "Y") {

        const nome_aluno_cad = prompt("Cadastre um aluno: ");

        /* Cadastro do aluno com verificação de erro: Nome vazio ou Inválido */
        if (nome_aluno_cad != NaN || nome_aluno_cad != "") {

            aluno.push(nome_aluno_cad)
            
            const materia_count = prompt("Deseja cadastrar o aluno em quantas matérias (Mínimo de três matérias): ")

            if (materia_count >= 3 && materia_count < 11) {
                for (let i = 0; i < materia_count; i++) {

                    const materia_cad = prompt("Cadastre uma matéria: ")

                    materia.push(materia_cad)     
                    
                    console.log(novo_aluno)                                         
                    
                    
                }   
                novo_aluno = new Object();
            }
            /* Tratamento de erro: Quantidade de Matérias */
            else {
                console.log("Escolha um número válido");
            }

        }
        /* Tratamento de erro: Nome Inválido */
        else {
            console.log("Digite um nome válido")
            return
        }
    }

    /* Caso nenhum aluno seja cadastrado o código encerra */
    else {
        console.log("Ok, até outro dia");
        break
    }
}