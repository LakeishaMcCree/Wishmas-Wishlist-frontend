class Item {
    constructor(id, item_name, item_price, item_rating, item_store, url, img, list_id ) {
        this.id = id
        this.item_name = item_name
        this.item_price = item_price
        this.item_rating = item_rating
        this.item_store = item_store
        this.url = url
        this.img = img
        this.list_id = list_id
        this.displayItem()
        //call render here
    }

   itemHTML() {
        return `
            <p> Gift: ${this.item_name} </p>
            <p> Price: ${this.item_price} </p>
            <p> Rating: ${this.item_rating} </p>
            <p> Store: ${this.item_store} </p><br>
            <p> Website Link: ${this.url} </p><br>
            <p> Picture Link: ${this.img} </p>      
        `
            
    }
    
    displayItem() {
        let itemContainer = document.getElementById(`item-container-${this.list_id}`)
        let itemCard = document.createElement('div')
        itemCard.id = this.id
        itemCard.innerHTML += this.itemHTML()
        itemContainer.appendChild(itemCard)
    }
}



//wipe everything off the page
//show the new item objects
