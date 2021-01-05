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
                    const{id, name, list_notes, item_name, item_price, item_rating, item_store, url, img, list_id} = data
                    new List(id, name, list_notes, item_name, item_price, item_rating, item_store, url, img, list_id)
                    clearForm()
                })
            })
       }

    

     eventDelegation(){
        const listSpot = document.querySelector("#wishmas-wishlist")
            listSpot.addEventListener("click", function(e){
                if (e.target.className == "edit"){
                    const [name, list_notes, item_name, item_price, item_rating, item_store, url, img] = e.target.parentElement.querySelectorAll("span")
                    formName.value = name.innerText
                    formListNotes.value = list_notes.innerText
                    formItemName.value = item_name.innerText
                    formItemPrice.value = item_price.innerText
                    formItemRating.value = item_rating.innerText
                    formItemStore.value = item_store.innerText
                    formUrl.value = url.innerText
                    formImg.value = img.innerText
                    listForm.dataset.id = e.target.parentElement.id 
                    document.getElementsByClassName("btn") [0].value = "Edit"
                    listForm.dataset.action = "update"
                } else if (e.target.className == "delete"){
                    const listID = e.target.parentElement.id
                    deleteList(listID)
                }
            })
    }
}
