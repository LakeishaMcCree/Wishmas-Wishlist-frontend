class List {
    constructor (id, name, list_notes) {
        this.id = id;
        this.name = name;
        this.list_notes = list_notes;
        this.renderList()
        this.createItems()
        //render the instance to the page
    }

    renderList() {
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


    listHTML() {
        return `
                <div class="row">
                    <div class="col s12 m7">
                        <form id="wishmas-wishlist">
                            <div class="card horizontal red lighten-3">
                                <div class="card-content white-text">
                                    <span class="card-title ">${this.name}</span>
                                    <p>${this.list_notes}</p>
                                    <div id="item-container-${this.id}"></div>
                                    <div class="card-action">
                                        <button class="fa fa-trash delete">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
    //render method that will create a div, append it to the page, add relevant classes and IDs. 
    //
    //dataset.id- refers to an id, creating and displaying my list
    
    

    createItems() {
        fetch(`http://localhost:3000/lists/${this.id}/items`)
        .then(resp => resp.json())
        .then(listItems => {
            listItems.forEach(listItem => {
                const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = listItem
                new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
            })
        })
    }
       
    
    deleteList(){
        const id = document.getElementById(`${this.id}`)
        fetch (`http://localhost:3000/lists/${this.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('list-spot').removeChild(id)
        })
    }

    // updateList(){
    //     const id = document.getElementById(`${this.id}`)
    //     fetch (`http://localhost:3000/lists/${this.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify
    //     }) 
    //     .then(() => {
    //         document.getElementById('list-spot').update(id)
    //     })
    // }
     

}
    
