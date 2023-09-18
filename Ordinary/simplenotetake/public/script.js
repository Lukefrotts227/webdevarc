function createNote(){
    const noteTitle = document.getElementById('note-title').value; 
    const noteContent = document.getElementById('notes-body').value; 

    if(noteTitle.trim() ==='' || noteContent.trim() === ''){
        alert("Enter both the title and the note for a valid note"); 
        return; 
    }

    const noteId = Date.now().toString(); 
    const note = {
        id: noteId, 
        title: noteTitle, 
        content: noteContent
    }; 

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];    

    existingNotes.push(note); 
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    document.getElementById('note-title').value = ''; 
    document.getElementById('notes-body').value = ''; 
    loadNotes(); 

}

function loadNotes(){
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    existingNotes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class ="list-element">
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button onclick="editNote('${note.id}')">Edit</button>
                <button onclick="deleteNote('${note.id}')">Delete</button>
            </div> 
        `;
        notesList.appendChild(listItem);
       
    });




}

function editNote(noteId){
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    const noteToEdit = existingNotes.find(note => note.id === noteId);

    if(noteToEdit()){
        document.getElementById('note-title').value = noteToEdit.title; 
        document.getElementById('notes-body').value = noteToEdit.content; 

        deleteNote();
    }

}

function deleteNote(noteId){
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || []; 

    const updatedNotes = existingNotes.filter(note => note.id !== noteId);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    

    loadNotes(); 
}

window.onload = loadNotes; 