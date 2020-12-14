document.addEventListener("DOMContentLoaded", function() {
   
    API.addItems()


    const createListForm = document.querySelector("#create-list-form")

    createListForm.addEventListener("submit", (e) => createFormHandler(e))
    
})

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const priceInput = document.querySelector('#input-price').value
    const numberInput = document.querySelector('#input-number').value
    const storeInput = document.querySelector('#input-store').value
    const urlInput = document.querySelector('#input-url').value
    const imageInput = document.querySelector('#input-image').value
    postFetch(nameInput, priceInput, numberInput, storeInput, urlInput, imageInput)
}

function postFetch(name, price, number, store, url, image) {
    console.log
}



