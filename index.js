function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const div = document.querySelector('#stats')
  const list = document.createElement('ul')
  div.appendChild(list)

  const nameItem = renderListItem('Name', name)
list.appendChild(nameItem)

const ageItem = renderListItem('Age', age)
list.appendChild(ageItem)

const colorDiv = renderColor(color)
const colorItem = renderListItem('Favorite Color', colorDiv)
list.appendChild(colorItem)

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)


function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(label, value) {
       
    const listItem = document.createElement('li')
 if (typeof value === 'string') {
     listItem.textContent = `${label}: ${value}`
  } else {
      listItem.textContent = `${label}: `
      listItem.appendChild(value)
  }
  return listItem
}