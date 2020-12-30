class API {
    //class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static getList() {
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists => {
            
            lists.forEach(list => {
                const id = list.id 
                const name = list.name 
                const list_notes = list.list_notes
                new List(id, name, list_notes)
                //debugger
            })
        })
    }
//posts form to the dom and grabs the attribute inputs, clears the form after submission
//takes an event, used as callback for the submit of the form

        static loadFormListener(){
            const listForm = document.getElementById("list-form")
           listForm.addEventListener("submit", function(e){
               e.preventDefault()
               const postResults = listInfo(e)
               let options
               let url
               if(listForm.dataset.action === "create"){
                   options = {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify(postResults)
                   }
                   url = "http://localhost:3000/lists"
               } else if (listForm.dataset.action === "update"){
                   options = {
                       method: 'PATCH',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify(postResults)
                   }
                   url = `http://localhost:3000/lists/${postList.dataset.id}`
               }
               fetch (url, options)
               .then(resp => resp.json())
               .then(data => {
                   if (!data.errors) {
                       getList()
                       clearForm()
                   } else {
                       throw new Error( `${data.errors}`)
                   }
               })
               .catch(alert)
           })
       }

       static listInfo(e) {
        return {
            'name': e.target.name.value,
            'list_notes': e.target.list_notes.value,
            'item_name': e.target.item_name.value, 
            'item_price': e.target.item_price.value,
            'item_rating': e.target.item_rating.value,
            'item_store': e.target.item_store.value, 
            'url': e.target.url.value,
            'img': e.target.img.value
        }
    }

    static clearForm() {
        listForm.dataset.action = "create"
        delete listForm.dataset.id
         e.target.name.value = ""
         e.target.list_notes.value = ""
            e.target.item_name.value = "" 
            e.target.item_price.value = ""
            e.target.item_rating.value = ""
            e.target.item_store.value = "" 
            e.target.url.value = ""
            e.target.img.value = ""
    }
}
        //create a new item object
        //clear form
