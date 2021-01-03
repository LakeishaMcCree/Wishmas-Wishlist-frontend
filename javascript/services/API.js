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
            const listForm = document.getElementById("add-item-form")
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

    function clearForm() {
         document.querySelector('#name').value = ""
         document.querySelector('#list_notes').value = ""
         document.querySelector('#add-item-form').value = ""
        }
    }
}
