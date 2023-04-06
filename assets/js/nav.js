// Nav functions
const menu = document.getElementById('menu')

export function openMenu() { // -----------EXPORT
    menu.classList.add('menu-is-open')
    menuLayer.classList.add('layer-is-active')
}

export function closeMenu() { // -----------EXPORT
    menu.classList.remove('menu-is-open')
    menuLayer.classList.remove('layer-is-active')
}
