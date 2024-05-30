const editarBtn = document.getElementById('editarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');


const editar = () => {
    const cardTitle = document.querySelector('.card-title');
    const cardText = document.querySelector('.card-text');

    const nuevoTitulo = prompt('Edita el título:', cardTitle.textContent);
    const nuevoTexto = prompt('Edita el texto:', cardText.textContent);

    if (nuevoTitulo !== null && nuevoTitulo.trim() !== '') {
        cardTitle.textContent = nuevoTitulo;
    }

    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
        cardText.textContent = nuevoTexto;
    }
};

const eliminar = () => {
    const card = document.querySelector('.card');
    card.remove();
};


editarBtn.onclick = editar;
eliminarBtn.onclick = eliminar;
