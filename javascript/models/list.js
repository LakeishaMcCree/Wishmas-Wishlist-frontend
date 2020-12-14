class List {
    constructor(id, name, list_notes){
        this.id = id
        this.name = name
        this.list_notes = list_notes
        this.renderList()
        // render the instance to the page somehow
    }

    //render method that will create a div, append it to the page, add relevant classes and IDs and other stuff
    //possibly event delegation, event listeners. other stuff, haven't decided what's happening yet

    renderList(){
        
        const listHolder = document.getElementById("wishmas-wishlist-list")
        const listContainer = document.createElement('div')
        listContainer.dataset.id = this.id
        listContainer.id = this.id
        listContainer.classList.add = "wishmas-wishlist-gifts"
        listContainer.innerHTML += this.listHTML()
        listHolder.appendChild(listContainer)
        listContainer.addEventListener("click", e => {
            if (e.target.className === "list-button") this.createItems(e)
        })
    }

    listHTML() {
        return `
        <h3 class="headline"> ${this.name}</h3>
        <p> ${this.list_notes}</p>
        <button type="button" class="list-button" data-id=${this.id}>See ${this.name}'s Wishlist!</button>
    `
    }
    createItems(e){
        //find the show id from the dataset = e.target.dataset.id
        //let id = e.target.dataset.id
        //fetch
        fetch("http://localhost:3000/lists/${id}/items") 
        .then(resp => resp.json())
        .then(items => {
            items.forEach(list => {
                const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = item
                //create our new associated item objects
                new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
            })
        })
        
        
        //initiate a fetch request to the show page of the list in question to get the scoped items OR we can initiate a fetch request to the item controller index method and scope it by the parameter(either way we have to scope it)
        //return the items for the list in question
        //create new item objects
        
    }

}