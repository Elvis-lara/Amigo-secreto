// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = []; // Arreglo para almacenar los nombres

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizarla

    listaAmigos.forEach((nombre) => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p style="color: green; font-weight: bold;">El amigo secreto sorteado es: ${amigoSorteado}</p>`;
}
