let listaDeAmigos = [];

function obtenerInput(){
    return document.getElementById('amigo').value;
}

function vaciarCaja() {
    document.getElementById('amigo').value = "";
}

//Boton agregar amigos
function agregarAmigo() {

    let amigo = obtenerInput();
    //Si amigo contiene espacios vacios O es un número
    if(amigo.trim() === "" || !isNaN(amigo)){ 
        alert("Ingresa un nombre valido");  // muestra alerta
        vaciarCaja();
    }else{
        listaDeAmigos.push(amigo);  // de otra manera agrega a la lista
        actualizarLista();
        vaciarCaja();
    }
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    let amigosLi = "";

    for (let index = 0; index < listaDeAmigos.length; index++) {
        amigosLi += "<li>" + listaDeAmigos[index] + "</li>";
    }

    listaHTML.innerHTML = amigosLi;
}

function sortearAmigo() {
    if(listaDeAmigos.length != 0){
        let random = Math.floor(Math.random() * listaDeAmigos.length);
        document.getElementById('resultado').innerHTML = "<li>" + listaDeAmigos[random] + "</li>";
    }else{
        alert("Agrega amigos para empezar");
    } 
}