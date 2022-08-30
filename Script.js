
const clownHatColor = clownHat.dataset.color
const clownHatSize = clownHat.dataset.numStripes

console.log(clownHatColor) // => 'red'
console.log(clownHatSize) // => '3'

// Set custom attribute
clownHat.dataset.numStripes = 4

const items = [
    'Do the shopping',
    'Mow the grass',
    'Wash the car'
]

const toDoList = document.querySelector('#listul')
const inputForm = document.querySelector('#additem')
const itemInput = inputForm.elements.newitem
const completed = document.querySelector('#done')

const appendNewItem = (item) => {
    let newListItem = document.createElement('li')
    newListItem.innerHTML = item
    toDoList.appendChild(newListItem)
}

const pushnewitem = (event) => {
    event.preventDefault()
    items.push(itemInput.value)
    appendNewItem(itemInput.value)

    itemInput.value = ''
    itemInput.focus()
}


inputForm.addEventListener('submit', pushnewitem)
