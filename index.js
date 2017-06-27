function changeDivContent(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const div = document.querySelector('#stats')
div.innerHTML = name.fontcolor("blue").fontsize(10) 
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeDivContent)