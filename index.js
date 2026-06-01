const snacks = ['Arroz con Leche', 'Yogur con cereales', 'Sanguche de Milanesa', 'Chocolatada con Sanguchitos de Miga', 'Tostadas con Dulce de Leche', 'Café con Leche', 'Submarino con Tostado', 'Licuado de Frutas con Medialunas con JyQ', 'Fiambre Surtido'];

const snackList = document.getElementById('snack-list');
const btnCount = document.getElementById('btn-count');
const countDisplay = document.getElementById('count-display');


snacks.forEach(snack => {
    const li = document.createElement('li');
    li.textContent = snack;
    snackList.appendChild(li);
});

btnCount.addEventListener('click', () => {
    countDisplay.textContent = `Hay un total de ${snacks.length} meriendas disponibles.`;
});
