class API {
    //class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists

    static loadLists() {
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists => {
            lists.forEach(list => {
                const {id, name, list_notes} = list 
                new List(id, name, list_notes)
            })
        })
    }

    
    

     

        
}





    //posts form to the dom and grabs the attribute inputs, clears the form after submission
    //takes an event, used as callback for the submit of the form


    // static loadList() {
    //     const listForm = document.getElementById("add-item-form")
    //     listForm.addEventListener("submit", function(e) {
    //     e.preventDefault();
    //     let listData = listInfo(e)
    //     //     'name': formName.value,
    //     //     'list_notes': formListNotes.value,
    //     //         'items_attributes': [{
    //     //             'item_name': formItemName.value,
    //     //             'item_price': formItemPrice.value,
    //     //             'item_rating': formItemRating.value,
    //     //             'item_store': formItemStore.value,
    //     //             'link': formLink.value,
    //     //             'image': formImage.value 
    //     //         }]
            
        
    //     fetch("http://localhost:3000/lists", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(listData)
    //     })
    //         .then(resp => resp.json())
    //         .then(list => {
    //             const {id, name, list_notes, item_name, item_price, item_rating, item_store, link, image} = list
    //             new List(id, name, list_notes, item_name, item_price, item_rating, item_store, link, image)
    //             //document.getElementById("add-item-form")
    //             clearForm()
    //         })
    
    // })

    
        


        // static renderItems(e) {
        //     e.preventDefault()
        //     let item = {
        //         'item_name': e.target.item_name.value, 
        //         'item_price': e.target.item_price.value, 
        //         'item_rating': e.target.item_rating.value, 
        //         'item_store': e.target.item_store.value,
        //         'link': e.target.link.value, 
        //         'image': e.target.image.value 
        //     };
        //     fetch(`http://localhost:3000/lists`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(item)
        //     })
        //     .then(resp => resp.json())
        //     .then(items => {
        //         const {id, name, list_notes, item_name, item_price, item_rating, item_store, link, image, list_id} = items
        //         new Item(id, name, list_notes, item_name, item_price, item_rating, item_store, link, image, list_id)
        //     })
            
        // }
    

    //  static eventDelegation(e){
    //     const listSpot = document.querySelector("#wishmas-wishlist")
    //         listSpot.addEventListener("click", function(e){
    //             if (e.target.className == "edit"){
    //                const [name, list_notes, item_name, item_price, item_rating, item_store, link, image] = e.target.parentElement.querySelectorAll("span")
    //                 formName.value = name.innerText
    //                 formListNotes.value = list_notes.innerText
    //                 formItemName.value = item_name.innerText
    //                 formItemPrice.value = item_price.innerText
    //                 formItemRating.value = item_rating.innerText
    //                 formItemStore.value = item_store.innerText
    //                 formLink.value = link.innerText
    //                 formImage.value = image.innerText
    //                 listForm.dataset.id = e.target.parentElement.id 
    //                 document.getElementsByClassName("btn") [0].value = "Edit"
    //                 listForm.dataset.action = "update"
    //             } else if (e.target.className == "delete"){
    //                 const listID = e.target.parentElement.id
    //                 deleteList(listID)
    //             }
    //         })
    //     } 
    
    
