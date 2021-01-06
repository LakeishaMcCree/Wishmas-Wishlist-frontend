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
        //this.loadFormItems()
        this.displayItem()
        
        //this.renderItems()
        //call render here
    }

   
    itemHTML() {
        return `
                <p> Gift: ${this.item_name} </p>
                <p> Price: ${this.item_price} </p>
                <p> Rating: ${this.item_rating} </p>
                <p> Store: ${this.item_store} </p><br>
                <p> Website Link: ${this.link} </p><br>
                <p> Picture Link: ${this.image} </p>  
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
// loadFormItems() {
    //     const itemForm = document.getElementById("item-container")

    //     itemForm.addEventListener("submit", function(e){
    //         e.preventDefault()
    //         const itemData = itemInfo(e)
    //         fetch(`http://localhost:3000/lists/${this.id}/items`, {
    //             method: 'POST',
    //                headers: {
    //                    'Content-Type': 'application/json',
    //                    'Accept': 'application/json'
    //                },
    //                body: JSON.stringify(itemData)  
    //             })
    //                 .then(resp => resp.json())
    //                 .then(items => {
    //                     items.forEach(item => {
    //                         const{id, item_name, item_price, item_rating, item_store, link, image, list_id} = item
    //                         new Item(id, item_name, item_price, item_rating, item_store, link, image, list_id)
               
    //                     })
    //                 })
              
    // })
// }