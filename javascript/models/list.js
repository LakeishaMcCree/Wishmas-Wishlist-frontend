class List {
    constructor (id, name, list_notes) {
        this.id = id
        this.name = name
        this.list_notes = list_notes
        this.createList()
        //render the instance to the page
    }

    //render method that will create a div, append it to the page, add relevant classes and IDs. 
    //
    //dataset.id- refers to an id, creating and displaying my list
    createList() {
        const listHolder = document.getElementById("wishlist-container");
        const listContainer = document.createElement('div');
        listContainer.dataset.id = this.id 
        listContainer.id = this.id
        listContainer.classList.add = "wishmas-wishlist"
        listContainer.innerHTML += this.listHTML()
        listHolder.appendChild(listContainer)
        listContainer.addEventListener("click", e => {
            if (e.target.className === "list-button") this.createLists(e)
        })
    }
    listHTML() {
        return `
        <h3 class="headline">${this.name}</h3>
        <p>Notes: ${this.list_notes}</p>
        <button type="button" class="item-button" data-id=${this.id}> Edit!</button>
        <button type="button" class="item-button" data-id=${this.id}> Delete!</button>
        `
    }

    deleteList(e){
        const id = parseInt(e.target.parentelement.id)
        fetch(`baseURL/lists/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('wishlist-container').removeChild(document.getElementById(id))
        })
    }

        
}