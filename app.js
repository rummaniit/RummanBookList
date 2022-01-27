let title = document.getElementById('title')
let author = document.getElementById('author')
let year = document.getElementById('year')
let submit = document.getElementById('sbmt')
let bookList = document.getElementById('book-list')
submit.addEventListener('click', function (e) {
    function clearData() {
        document.getElementById('title').value = " "
        document.getElementById('author').value = " "
        document.getElementById('year').value = " "
    }
    e.preventDefault()
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Put Every Description');
    }
    else {
        let newRow = document.createElement('tr')

        let newTitle = document.createElement('th')
        newTitle.innerText = title.value
        newRow.appendChild(newTitle)

        let newAuthor = document.createElement('th')
        newAuthor.innerText = author.value
        newRow.appendChild(newAuthor)

        let newYear = document.createElement('th')
        newYear.innerText = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)
        clearData()
    }


})