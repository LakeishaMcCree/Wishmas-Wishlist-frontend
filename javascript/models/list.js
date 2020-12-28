class List {
    constructor (id, name, list_notes, item_name, item_price, item_rating, item_store, url, img, list_id) {
        this.id = id
        this.name = name
        this.list_notes = list_notes
        this.postList()
        this.fetchItems()
        //render the instance to the page
    }

    listHTML() {
        return `
        <h3 class="headline">${this.name}</h3>
        <p>Notes: ${this.list_notes}</p>
        <div id="item-container ${this.id}"></div>
        
        <button type="button" class="item-button" data-id=${this.id}>Edit!</button>
        <button type="button" class="item-button" data-id=${this.id}>Delete!</button>
        `
    }
    //render method that will create a div, append it to the page, add relevant classes and IDs. 
    //
    //dataset.id- refers to an id, creating and displaying my list
    postList() {
        const listContainer = document.getElementById('#add-item-form');
        const listCard = document.createElement('div');
        listCard.dataset.id = this.id 
        listCard.id = this.id
        listCard.classList.add = "wishmas-wishlist"
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

    deleteList(e){
        const id = document.getElementById(`${this.id}`)
        fetch(`http://localhost:3000/lists/${id}`, {
            method: 'DELETE'
        })
        .then(() => { //removing the child of the parent div, by its numbered ID corresponding with what's in the database
            document.getElementById('wishlist-container').removeChild(id)
        })
    }
        
}