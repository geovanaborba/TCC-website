/*PERGUNTA 1*/

let questao = {
pergunta: 'Qual variável será bloqueada ao escopo que foi criada?',
alternativas: ['var private nome = "Cassiano";', 'var nome = "Cassiano";', 'var priv nome = "Cassiano";', 'let nome = "Cassiano";'],
correta: 3
};

function mostraQuestao(q){
    let titleDiv = document.getElementById('pergunta');
    titleDiv.textContent = q.pergunta;

    let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
            element.addEventListener('click', function(){
                if (index == q.correta) {
                    console.log ("Correto!")
                }
                else {
                    console.log ("Errado!")
                }
            })
        })
}

mostraQuestao(questao);


/*PERGUNTA 2*/