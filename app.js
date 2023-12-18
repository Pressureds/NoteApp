document.addEventListener('DOMContentLoaded', function () {
    const noteListContainer = document.getElementById('noteList');
  
    // Data hardcode catatan
    const notesData = [
      { title: 'Catatan 1', createdAt: '2023-01-01', body: 'Isi dari catatan 1' },
      { title: 'Catatan 2', createdAt: '2023-02-01', body: 'Isi dari catatan 2' },
      { title: 'Catatan 3', createdAt: '2023-03-01', body: 'Isi dari catatan 3' },
    ];
  
    // Fungsi untuk membuat tampilan catatan
    function createNoteElement(note) {
      const noteElement = document.createElement('div');
      noteElement.classList.add('note-container');
  
      noteElement.innerHTML = `
        <h2 class="note-title">${note.title}</h2>
        <p class="note-timestamp">${note.createdAt}</p>
        <p class="note-body">${note.body}</p>
      `;
      return noteElement;
    }
  
    // Menampilkan daftar catatan
    notesData.forEach(function (note) {
      const noteElement = createNoteElement(note);
      noteListContainer.appendChild(noteElement);
    });
  });
  