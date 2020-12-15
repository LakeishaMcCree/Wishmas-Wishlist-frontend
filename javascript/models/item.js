class Item {
    constructor(id, item_name, item_price, item_rating, item_store, link, image, list_id ) {
        this.id = id
        this.item_name = item_name
        this.item_price = item_price
        this.item_rating = item_rating
        this.item_store = item_store
        this.link = link
        this.image = image
        this.list_id = list_id
        this.renderItems()
        //call render here
    }

    itemHTML() {

    }
    
    renderItems() {
        const itemCard = document.createElement('div')
        itemCard.classList.add('item-card')
        itemCard.dataset.id = this.id
        itemCard.innerHTML += this.itemHTML()
        list
    }
}

//wipe everything off the page
//show the new item objects
//have a link to go back to the homepage