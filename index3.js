/* Requisito de biblioteca */
const prompt = require("prompt-sync")();

function aluno_cad() {
    bool_aluno = false
    let nome_aluno = prompt("Cadastre um aluno: ");

    if (typeof nome_aluno === 'string' && isNaN(nome_aluno)) {
        bool_aluno = true
        return nome_aluno
    }
    else {        
        console.log("Digite um nome válido");
        return
    }
}

function materias_cad() {
    bool_materia = false
    materias = []

    let i_materia = +prompt("Quantas matérias deseja cadastrar? (Mínimo de três): ")
        if (i_materia >= 3) {
            
            for (let i = 0; i < i_materia; i++) {
                
                const materia_cad = prompt("Cadastre uma matéria: ")

                if (isNaN(materia_cad)) {
                    materias.push(materia_cad)
                }
                else {                    
                    console.log("Digite uma matéria valida");    
                    return                
                }
            }
            if(materias_cad.length = i_materia){
                bool_materia = true
            }            
        }
        else{
            console.log("Digite no minímo 3 matérias")
            return
        }
    
    return materias
}

while (true) {
    main = prompt("Deseja cadastrar um aluno? [Y/N]: ").toLowerCase()
    if (main == "y") {
        result_aluno = aluno_cad()

        if (bool_aluno == true) {
            
            resulta_materias = materias_cad()
            
                if(bool_materia == true){
                    ficha_aluno = new Object({"Nome" : result_aluno, "Matérias" : resulta_materias});
                    console.log(ficha_aluno);
                }
        }
        else {
            return
        }
    }
    else {
        console.log("Até mais")
        break
    }
}
