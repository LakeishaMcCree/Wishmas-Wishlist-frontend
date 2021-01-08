class List {
    constructor (id, name, list_notes) {
        this.id = id;
        this.name = name;
        this.list_notes = list_notes;
        this.displayList()
        this.getItems()
        
        //render the instance to the page
    }

    
   
   displayList() {
        const listContainer = document.querySelector("#list-spot")
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
                            <div class="card horizontal red darken-1">
                            <div class="card-content white-text" id="${this.id}">
                                    <span class="card-title ">${this.name}</span>
                                    <p>${this.list_notes}</p>
                                    <div id="item-container-${this.id}"></div>
                                    <div class="card-action">
                                        <button class="fa fa-trash delete">Delete List</button>
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


    deleteList(){
        fetch(`http://localhost:3000/lists/${this.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById(`${this.id}`).parentNode.removeChild(document.getElementById(`${this.id}`))
        })
    }


    getItems() {
        fetch(`http://localhost:3000/lists/${this.id}/items`)
            .then(resp => resp.json())
            .then(listItems => {
                listItems.forEach(listItem => {
                    const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = listItem
                    new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
                })
            })
    }
    
    
    
}









// itemInfo(e) {
//     return {
//         item_name: e.target.querySelector('#item_name').value, 
//         item_price: e.target.querySelector('#item_price').value, 
//         item_rating: e.target.querySelector('#item_rating').value, 
//         item_store: e.target.querySelector('#item_store').value,
//         link: e.target.querySelector('#link').value, 
//         image: e.target.querySelector('#image').value  

//     }
// }

    //  postItems() {
    //      let itemData = this.itemInfo()
    //     fetch(`http://localhost:3000/lists/${this.id}/items`)
            
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         //'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(itemData)
        // })
    //     .then(resp => resp.json())
    //     .then(data => {
    //             const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = data
    //             new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
    //     })
    
    // }    

    
    
    

    

    

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
     


    
