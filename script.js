const notesContainer = document.querySelector('.notes-container')
const addBtn = document.querySelector('.add-btn')
const notes = document.querySelectorAll('.notes')

updateData()

addBtn.addEventListener('click', () => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    div.className = 'notes-card'
    p.setAttribute('contenteditable', true)
    p.className = 'notes'
    button.className = 'remove-notes'
    button.textContent = '✖️'
    notesContainer.appendChild(div)
    div.appendChild(p)
    div.appendChild(button)
    saveNotes()
})

document.addEventListener('input', () => {
    saveNotes()
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.className == 'remove-notes') {
        e.target.parentElement.remove()
        saveNotes()
    }
})

function updateData() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}

function saveNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}

