import furnitures from './furnitures.js'
import currentFurniture from './random-number.js'

// Create repetitives changes in the review properties ------------EXPORT
function repetitivesFurnitureProps() {
    const furnitureItem = furnitures[currentFurniture]
    furnitureImg.src = furnitureItem.imgSrc
    furnitureTitle.textContent = furnitureItem.title
    furnitureTxt.textContent = furnitureItem.txt
}

export default repetitivesFurnitureProps