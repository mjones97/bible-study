function addNote() {
    const bookSelect = document.getElementById('book');
    const chapterInput = document.getElementById('chapter');
    const verseInput = document.getElementById('verse');
    const subjectInput = document.getElementById('subject');
    const noteInput = document.getElementById('note');
    const notesContainer = document.getElementById('notes');
    const errorDiv = document.getElementById('error');

    const book = bookSelect.value;
    const chapter = chapterInput.value.trim();
    const verse = verseInput.value.trim();
    const subject = subjectInput.value.trim();
    const note = noteInput.value.trim();

    if (!book || !chapter || !verse || !subject || !note) {
        errorDiv.textContent = "Please fill in all fields.";
        return;
    }

    errorDiv.textContent = "";

    const noteElement = document.createElement('li');
    noteElement.classList.add('note');

    const bookParagraph = document.createElement('p');
    bookParagraph.innerHTML = `<strong><em>${book} ${chapter}:${verse}</em></strong>`;
    const subjectParagraph = document.createElement('h4');
    subjectParagraph.textContent = capitalizeString(subject);
    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = capitalizeString(note);

    noteElement.appendChild(bookParagraph);
    noteElement.appendChild(subjectParagraph);
    noteElement.appendChild(noteParagraph);

    notesContainer.append(noteElement);

    bookSelect.value = '';
    chapterInput.value = '';
    verseInput.value = ''
    subjectInput.value = '';
    noteInput.value = '';
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const books = {
    "Old Testament": ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"],
    "New Testament": ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]
};

const select = document.getElementById('book');

Object.keys(books).forEach(category => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = category;

    books[category].forEach(book => {
        const option = document.createElement('option');
        option.value = book;
        option.textContent = book;
        optgroup.appendChild(option);
    }); 

    select.appendChild(optgroup)
});