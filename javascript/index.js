document.addEventListener("DOMContentLoaded", function() {
   
    API.addItems()


    const createListForm = document.querySelector("#create-list-form")

    createListForm.addEventListener("submit", (e) => createFormHandler(e))
    
})

function createFormHandler(e) {
    e.preventDefault()
   debugger
}




