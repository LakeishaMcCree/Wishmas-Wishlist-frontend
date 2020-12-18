document.addEventListener("DOMContentLoaded", function(){
   //fetch and load the lists
    API.getList()
    loadFormListener()
    //event listener and handler for the create list form
    //document.getElementById('form').addEventListener('submit', API.createList)
})


const formName = document.getElementById("name")
const formListNotes = document.getElementById("list-notes")
const itemForm = document.getElementById("item-form")
const baseURL = "http://localhost:3000/lists"


function loadFormListener(){
    //identify the form element
    //add the event listener to the form for the form submit
    itemForm.addEventListener("submit", function (e) {
         e.preventDefault()
        //grab text from each field
        const postListResults = getInfo(e)
        let options
        let url 
        if (itemForm.dataset.action === "create"){
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify(postListResults)
            }
            url = baseURL
        } else if (postForm.dataset.action === "update"){
            options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postListResults)
            }
            url = `${baseURL}/${listForm.id}`
        }
        // fetch our results to the back end
        // fetch(url, options)
        // .then(resp => resp.json())
        // .then(data => {
        //     if (!data.errors){
        //         API.getList()
        //         clearForm()
        //     } else {
        //         throw new Error(`${data.errors}`)
        //     }
        // })
        // .catch(alert)
        // })


        function getInfo(e){
            return {
                name: e.target.formName.value,
                list_notes: e.target.formListNotes.value,
                itemForm: e.target.listForm.value
            }
        }
    
    

    

    //function postHTML(list){
        //return `
        //<div class="card>
           // <div class="card-content" id="${li}`
    //}

    

    //const clearForm = () => {
      //  listForm.dataset.action = "create"
        //delete listForm.dataset.id
        //formName.value = ""
        //formListNotes.value = ""
        //listForm.value = ""
      //}
})
}