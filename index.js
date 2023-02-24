let countEl = document.getElementById('count-el')
let SavedEl = document.getElementById('savedEl')

count = 0
function increment(){
    count += 1
    countEl.textContent = count
}

function save() {
    SavedEl.textContent += `${count} - `
    countEl.innerText = 0
    count = 0
}