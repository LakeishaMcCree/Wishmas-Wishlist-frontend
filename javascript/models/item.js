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
        this.renderItems()
        //call render here
    }

    itemHTML() {
        return `
            <p> ${this.item_name} </p>
            <p> ${this.item_price} </p>
            <p> ${this.item_rating} </p>
            <p> ${this.item_store} </p>
            <p> ${this.url} </p>
            <p> ${this.img} </p>
        `
    }
    
    renderItems() {
        let listItems = document.getElementById(`item-container-${this.list_id}`)
        let itemCard = document.createElement('div')
        itemCard.classList.add('item-card')
        itemCard.dataset.id = this.id
        itemCard.innerHTML += this.itemHTML()
        listItems.appendChild(itemCard)
    }
}



//wipe everything off the page
//show the new item objects
