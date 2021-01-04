class List {
    constructor (id, name, list_notes) {
        this.id = id;
        this.name = name;
        this.list_notes = list_notes;
        this.displayList()
        this.fetchItems()
        //render the instance to the page
    }

    listHTML() {
        return `
        <div class="row">
            <div class="col s12 m7">
                 <form id="wishmas-wishlist">
                    <div class="card horizontal blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${this.name}</span>
                        <p> About the Child: ${this.list_notes}</p>
                    </div>
                    <div class="card-action">
                        <button type="button" class="item-button" data-id=${this.id}>Edit!</button>
                        <button type="button" class="item-button" data-id=${this.id}>Delete!</button>
                        <div id="item-container-${this.id}"></div>
                    </div>
                </form><br>
                    
                </div>
            </div>
        </div>
        `
    }
    //render method that will create a div, append it to the page, add relevant classes and IDs. 
    //
    //dataset.id- refers to an id, creating and displaying my list
    displayList() {
        const listContainer = document.getElementById("list-spot")
        const listCard = document.createElement('div')
        listCard.dataset.id = this.id 
        listCard.id = this.id
        listCard.classList.add = "list-card"
        listCard.innerHTML += this.listHTML()
        listContainer.appendChild(listCard)
        listCard.addEventListener('click', e => {
            if (e.target.className.includes('delete')) this.deleteList()
        })          
    }
    

    fetchItems() {
        fetch(`http://localhost:3000/lists/${this.id}/items`)
        .then(resp => resp.json())
        .then(listItems => {
            listItems.forEach(listItem => {
                const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = listItem
                new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
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
                    document.getElementsByClassName("btn") [0].value = "Edit List"
                    listForm.dataset.action = "update"
                } else if (e.target.className == "delete"){
                    console.log("you clicked delete")
                    const listID = e.target.parentElement.id
                    deleteList(listID)
                }
               
            })
    }

    
     

}
    
