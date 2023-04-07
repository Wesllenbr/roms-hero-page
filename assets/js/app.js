import furnitures from "./furnitures.js"

///////// Onload events /////////
window.onload = randomItem 

///////// Navgation /////////
// Get navgation elements
const menuBtnOpen = document.getElementById('btn-menu')
const menuBtnClose = document.getElementById('btn-close')
const menuLayer = document.getElementById('layer')

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

// Add events to menu elements
menuBtnOpen.addEventListener('click', openMenu)
menuBtnClose.addEventListener('click', closeMenu)
menuLayer.addEventListener('click', closeMenu)

///////// Furniture /////////
let currentFurniture = 0

const prevBtn = document.querySelectorAll('.btn__previous')
const nexBtn = document.querySelectorAll('.btn__next')
const furnitureImg = document.getElementById('furniture-img')
const furnitureTitle = document.getElementById('furniture-title')
const furnitureTxt = document.getElementById('furniture-txt')

console.log(prevBtn)
repetitivesFurnitureProps()
const lastFurnitureItem = furnitures.length - 1

function nextItem() {
    currentFurniture++

    if (currentFurniture > lastFurnitureItem) {
        currentFurniture = 0

        repetitivesFurnitureProps()
    }

    repetitivesFurnitureProps()
}

function prevItem() {
    currentFurniture--

    if (currentFurniture < 0) {
        currentFurniture = lastFurnitureItem
        repetitivesFurnitureProps()
    }

    repetitivesFurnitureProps()
    
}

// Create repetitives changes in the review properties ------------EXPORT
function repetitivesFurnitureProps() {
    const furnitureItem = furnitures[currentFurniture]
    furnitureImg.setAttribute("srcset", furnitureItem.imgSrcset)
    furnitureImg.src = furnitureItem.imgSrc
    furnitureTitle.textContent = furnitureItem.title
    furnitureTxt.textContent = furnitureItem.txt
}

nexBtn.forEach((btn) => {
    btn.addEventListener('click', nextItem)
})
prevBtn.forEach((btn) => {
    btn.addEventListener('click', prevItem)
})



///////// Ramdom numbers /////////

// Random item
function randomItem() {
    const ramdomNumber = Math.floor(Math.random() * furnitures.length)

    currentFurniture = ramdomNumber
    repetitivesFurnitureProps()
}