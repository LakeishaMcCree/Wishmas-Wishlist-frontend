class List {
    constructor (id, name, list_notes) {
        this.id = id;
        this.name = name;
        this.list_notes = list_notes;
        this.loadFormListener()
        this.getItems
        this.postItems()
        //this.displayList()
        //this.createItems()
        // this.items = items.map(item => {
        //     const {id, item_name, item_price, item_rating, item_store, url, img, list_id} = item
        //     return newItem(id, item_name, item_price, item_rating, item_store, url, img, list_id)
        // }
        

        //render the instance to the page
    }

     loadFormListener(){
        const listForm = document.getElementById("add-item-form")
       
        listForm.addEventListener("submit", function(e) {
            e.preventDefault()
            const listData = this.listInfo(e)
            fetch("http://localhost:3000/lists", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(listData)
            })
            .then(resp => resp.json())
            .then(data => {
                const{id, name, list_notes, item_name, item_price, item_rating, item_store, url, img, list_id} = data//} = data
                new List(id, name, list_notes, item_name, item_price, item_rating, item_store, url, img, list_id)//, item_name, item_price, item_rating, item_store, url, img, list_id)       
            })
            
        })
        this.clearForm()
        this.displayList()
        this.getItems()
        this.postItems()
   }

    
   
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
        
    
    listHTML() {
        return `
                <div class="row">
                    <div class="col s12 m7">
                        <form id="wishmas-wishlist">
                            <div class="card horizontal red lighten-3">
                                <div class="card-content white-text" id="${this.list_id}">
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

     postItems() {
         const itemData = this.itemInfo()
        fetch("http://localhost:3000/items/", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        .then(data => {
                const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = data
                new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
        })
    
    }


    listInfo(e) {
        return {
            name: document.querySelector('#name').value, 
            list_notes: document.querySelector('#list_notes').value
        }
    }

    itemInfo(e) {
        return {
            item_name: document.querySelector('#item_name').value, 
            item_price: document.querySelector('#item_price').value, 
            item_rating: document.querySelector('#item_rating').value, 
            item_store: document.querySelector('#item_store').value,
            link: document.querySelector('#link').value, 
            image: document.querySelector('#image').value  
    
        }
    }
    

    clearForm() {
        document.querySelector('#name').value = ""
        document.querySelector('#list_notes').value = ""
        document.querySelector('#item_name').value = ""
        document.querySelector('#item_price').value = ""
        document.querySelector('#item_rating').value = ""
        document.querySelector('#item_store').value = ""
        document.querySelector('#link').value = ""
        document.querySelector('#image').value = "" 
    }


    deleteList(){
        const id = document.getElementById(`${this.id}`)
        fetch (`http://localhost:3000/lists/${this.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('list-spot').removeChild(id)
            //document.getElementById(`${this.id}`).parentNode.removeChild(document.getElementById(`${this.id}`))
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
    
