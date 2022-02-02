let listadeparticipantes = [ "Participantes -" , "Helena", "Chico", "Mário", "Janine", "Glória", "Maria"];
let listadepalestrantes = ["Palestrantes -", "Paulo", "Larissa","Danilo"];
let quantidadedeparticipantes = listadeparticipantes.length;
let quantidadedepalestrantes = listadepalestrantes.length;
let inicio = 0;
let maxparticipantes = 100;
var dataatual = 23;
var dataevento = 30;
const idade = 18;

if  (dataevento > dataatual) {
console.log('Cadastro permitido');
}
else{
    console.log('Evento não permitido');
}
if (idade >= 18){
    console.log('Cadastro permitido');
    console.log('Lista de participantes');
    console.log('Lista de palestrantes');
    
    }
    else{
        console.log('Cadastro não permitido');  
    }



    for (let inicio = 0; inicio < quantidadedeparticipantes; inicio++) {
        const participantes = listadeparticipantes[inicio];
        console.log(participantes);
    }

    for (let inicio = 0; inicio < quantidadedepalestrantes; inicio++) {
        const palestrantes = listadepalestrantes[inicio];
        console.log(palestrantes);
    }
    
    
    if(quantidadedeparticipantes < maxparticipantes) { 
        console.log('Cadastro permitido');
    }
        else{
    console.log('Cadastro não permitido - Limite excedido')
        }

        ///////////////////////////