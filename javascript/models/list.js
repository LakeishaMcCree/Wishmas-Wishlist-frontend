class List {
    constructor (id, name, list_notes) {
        this.id = id
        this.name = name
        this.list_notes = list_notes
        this.renderList()
        //render the instance to the page
    }

    //render method that will create a div, append it to the page, add relevant classes and IDs. 
    //
        renderList() {
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

        listHTML() 
            return `
            <h3 class="headline">${this.name}</h3>
            <p>Notes: ${this.list_notes}</p>
            <button type="button" class="item-button" data-id=${this.id}> Add an Item!</button>
            `
        }


            //listCard.classList.add('list-card')
            //listCard.id = this.id
            //listCard.innerHTML += this.listHTML()
            //listContainer.appendChild(listCard)
            //listCard.addEventListener("click", e => {
              //  if (e.target.className === "item-button") this.createItems(e)
                
            //})
        //}
        

        
}