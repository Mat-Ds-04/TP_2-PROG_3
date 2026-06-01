const cards = document.querySelectorAll('.card');
const counterDisplay = document.getElementById('counter');

function updateCounter() {
    const selectedCount = document.querySelectorAll('.selected').length;
    counterDisplay.textContent = selectedCount;
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
        
        if (card.classList.contains('selected')) {
            console.log("Elemento seleccionado");
        }
        updateCounter();
    });
});
