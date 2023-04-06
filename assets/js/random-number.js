import furnitures from './furnitures.js'
import repetitivesFurnitureProps from './repetetives-things.js'

let currentFurniture = 0

// Random item
function randomItem() { // -----------EXPORT
    const ramdomNumber = Math.floor(Math.random() * furnitures.length)

    currentFurniture = ramdomNumber
    repetitivesFurnitureProps()
}

export default randomItem
