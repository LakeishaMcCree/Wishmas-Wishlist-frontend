class API {
    //class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
 
    static loadLists() {
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
            listForm.addEventListener("submit", function(e) {
                e.preventDefault()
                const listData = listInfo(e)
                fetch("http://localhost:3000/lists", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(listData)
                })
                .then(resp => resp.json())
                .then(data => {
                    const{id, name, list_notes} = data
                    new List(id, name, list_notes)
                    clearForm()
                })
            })
       }

       static listInfo(e) {
        return {
        name: e.target.querySelector('#name').value, 
        list_notes: e.target.querySelector('#list_notes').value, 
        item_name: e.target.querySelector('#item_name').value, 
        item_price: e.target.querySelector('#item_price').value, 
        item_rating: e.target.querySelector('#item_rating').value, 
        item_store: e.target.querySelector('#item_store').value,
        url: e.target.querySelector('#url').value, 
        img: e.target.querySelector('#img').value    
        }
    }

     static clearForm() {
        document.querySelector('#name').value = ""
        document.querySelector('#list_notes').value = ""
        document.querySelector('#item_name').value = ""
        document.querySelector('#item_price').value = ""
        document.querySelector('#item_rating').value = ""
        document.querySelector('#item_store').value = ""
        document.querySelector('#url').value = ""
        document.querySelector('#img').value = ""
       }
    
}
