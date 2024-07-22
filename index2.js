const prompt = require("prompt-sync")();

const alunos = {};
const materias = ['Português', 'Matemática', 'História', 'Geografia', 'Ciências']

while(true){
    const quest = prompt("Deseja cadastrar um aluno? [Y/N]: ");
    
    if(quest == "y" || quest == "Y"){        
        
        const nome_aluno_cad = prompt("Cadastre um aluno: ");

        alunos.push({"Nome": nome_aluno_cad, "Matérias" : materias});

        console.log(alunos);
    }
    else{
        console.log("Ok, até outro dia");
        break
    }
}