const menu = document.querySelector('[data-menu="menu"]')
const navbar = document.querySelector('[data-menu="navbar"]')

const openNavbar = () => {
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none'
        return
    }
    
    navbar.style.display = 'flex'
}

menu.addEventListener('click', openNavbar)