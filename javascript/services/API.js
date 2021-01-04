class API {
    //class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static getList() {
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists => {
            lists.forEach(list => {
                const{id, name, list_notes} = list 
                new List(id, name, list_notes)
            })
        })
    }
    //posts form to the dom and grabs the attribute inputs, clears the form after submission
    //takes an event, used as callback for the submit of the form

        static loadFormListener(){
            //const listForm = document.getElementById("add-item-form")
            listForm.addEventListener("submit", function(e){
               e.preventDefault()
               const postResults = listInfo(e)
                fetch("http://localhost:3000/lists", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postResults)
           })
           .then(resp => resp.json())
           .then(data => {
               const{id, name, list_notes} = data
               new List(id, name, list_notes)
               clearForm()
           })
       })

       function listInfo(e) {
        return {
        name: formName.value, 
        list_notes: formListNotes.value, 
        item_name: formItemName.value, 
        item_price: formItemPrice.value, 
        item_rating: formItemRating.value, 
        item_store: formItemStore.value,
        url: formUrl.value, 
        img: formImg.value    
        }
    }

     function clearForm() {
        listForm.dataset.action = "create"
        delete listForm.dataset.id
        formName.value = ""
        formListNotes.value = ""
        formItemName.value = ""
        formItemPrice.value = ""
        formItemRating.value = ""
        formItemStore.value = ""
        formUrl.value = ""
        formImg.value = ""
       }
    }
}
