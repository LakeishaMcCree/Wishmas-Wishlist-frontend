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
    }

    listHTML() {
        return `
        
        <h3 class="headline"> ${this.name}</h3>
        <p> ${this.list_notes}</p>
        <button type="button">See ${this.name}'s Wishlist!</button>
    `
    }
}