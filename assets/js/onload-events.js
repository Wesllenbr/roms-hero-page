import randomItem from "./random-number.js"

// When page loads

function onloadEvents() {
    window.onload = randomItem()
}

export default onloadEvents