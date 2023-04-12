const hamb = document.getElementById('burguer')

function toggleMenu() {
    const itens = document.getElementById('itens')
    itens.classList.toggle('active')
}

hamb.addEventListener('click', toggleMenu)