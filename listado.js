const items = [
    { nombre: 'Lavar la ropa.', categoria: 'hogar' },
    { nombre: 'Programar.', categoria: 'trabajo' },
    { nombre: 'Cocinar.', categoria: 'hogar' },
    { nombre: 'Reunión de Trabajo.', categoria: 'trabajo' },
    { nombre: 'Limpiar la galería.', categoria: 'hogar' },
    { nombre: 'Presentar proyecto.', categoria: 'trabajo' },
    { nombre: 'Organizar el escritorio.', categoria: 'trabajo' },
    { nombre: 'Pagar los impuestos.', categoria: 'hogar' },
    { nombre: 'Limpiar el baño.', categoria: 'hogar' },

];

const container = document.getElementById('list-container');
const btnAll = document.getElementById('btn-all');
const btnHome = document.getElementById('btn-home');

function renderList(arrayFiltrado) {
    container.innerHTML = '';

    arrayFiltrado.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-listado';
        div.textContent = item.nombre;
        container.appendChild(div);
    });
}


renderList(items);

btnAll.addEventListener('click', () => {
    renderList(items);
});

btnHome.addEventListener('click', () => {
    const filtered = items.filter(item => item.categoria === 'hogar');
    renderList(filtered);
});
