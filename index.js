// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",
                    notas:[],
                    cursos:[],
                    faltas:5},

                    {nome:"Edson",
                    notas:[],
                    cursos:[],
                    faltas:2},

                    {nome:"Bruno",
                    notas:[10,9.8,9.6],
                    cursos:[],faltas:0},

                    {nome:"Guilherme",
                    notas:[10,9.8,9.6],
                    cursos:[{nomeDoCurso:"Full Stack",
                    dataMatricula:new Date}],
                    faltas:0},

                    {nome:"Carlos",
                    notas:[],
                    cursos:[],
                    faltas:0},

                    {nome:"Lucca",
                    notas:[10,9.8,9.6],
                    cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


//Alumno: Adrián Ricardo Iazbeck Scalia  Curso: Blend 03



 /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/


function adicionarAluno(novoAlumno){
      agregado  = alunosDaEscola.push({nome: novoAlumno, notas :null , curso: [],faltas : null});
   //return novoAlumno + " foi adicionado ao array";
     
 console.log (alunosDaEscola);
      }
console.log (adicionarAluno("pepe"));

// /************************************************************************************************/
// /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
//     Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    function listarAlunos(){
       let grupo = alunosDaEscola.map((alumnos)=>{
            console.log( "os alumnos são: " + alumnos.nome);
        })
        }
            
    


//  /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
//   Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar.
//    E deverá devolver um aluno em seu retorno. */

   function buscarAluno (nome){
       
  for (let index = 0; index < alunosDaEscola.length; index++  ) 
    {console.log (index);
      
          if (nome === alunosDaEscola[index].nome){ 
           return  ( nome + " alumno encontrado");
                   
      }else {  
           console.log( "alumno não encontrado");
  
    } 
     }}


console.log(buscarAluno("pepe"));




//  /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
//     Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
//     e deverá armazenar a data atual no momento da matricula
//     Lembre-se de exibir o feedback para o usuário. */

   function matricularAluno(alumno, matricula){

    console.log (alunosDaEscola[alumno].cursos);
    if (alunosDaEscola[alumno].cursos == 0 ){
          alunosDaEscola[alumno].curso  = alunosDaEscola[alumno].curso = [{curso : matricula} , {data : new Date()}];
        

          return alunosDaEscola[alumno];
          
    }else
        { return  "Alumno  Matriculado"
    }

};
console.log (matricularAluno(0,"bellas artes"));
  

   /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

   function aplicarFalta(alumno){
       
    console.log (alunosDaEscola[alumno].cursos);
    if (alunosDaEscola[alumno].cursos != 0 ){
          let agregarFalta = (alunosDaEscola[alumno].faltas + 1 );
           alunosDaEscola[alumno].faltas = alunosDaEscola[alumno].faltas + 1 
          console.log (alunosDaEscola);
          return
    }else
        { return  "Alumno Não Matriculado"
    }

};
   console.log (aplicarFalta(3));

    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
    
   function aplicarNota(alumno,nota){
   
    console.log (alunosDaEscola[alumno].cursos);
    if (alunosDaEscola[alumno].cursos != 0 ){
          alunosDaEscola[alumno].notas  = alunosDaEscola[alumno].notas = nota
        

          return alunosDaEscola[alumno];
          
    }else
        { return  "Alumno  não Matriculado"
    }

 }
  console.log (aplicarNota(0,8));

  /* 
//      Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
//      Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
//      */



function aprovarAluno(alumno)
{
    console.log (alunosDaEscola[alumno].nome);
    if (alunosDaEscola[alumno].cursos != 0 ){
        var total = alunosDaEscola[alumno].notas.reduce(function(total, numero){
            return total + numero;
           }, 0);
           console.log(total / alunosDaEscola[alumno].notas.length);
          if(total >= 7 ){

              if (alunosDaEscola[alumno].faltas <= 3 ){

                return alunosDaEscola[alumno].nome +  " Aprovado";
              }else { return  "O alumno tem muitas falatas pra aprovar"}
          }else {return "falta nota para aprovar"}
            

   
} else { return "alumno não matriculado " }

}

console.log (aprovarAluno(5));