class API {
    //class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static getList() {
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists=> {
            lists.forEach(list => {
                const{id, name, list_notes} = list 
                new List(id, name, list_notes)
            })
        })
    }
//posts form to the dom and grabs the attribute inputs, clears the form after submission

    createList(e) {
        let list = {
            'name': e.target.name.value,
            'list_notes': e.target.list_notes.value  
        };
        fetch(baseURL, { //post fetch
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        })
        .then(resp => resp.json())
        .then(lists => {
            const{ id, name } = lists
            new List(id, name)
        })
    }

    static getItem() {
        fetch('${baseURL}/lists/:list_id/items') //read fetch
        .then(resp => resp.json())
        .then(items => {
            items.forEach(item => {
                const { id, item_name, item_price, item_rating, item_store, link, image } = item
                new Item(id, item_name, item_price, item_rating, item_store, link, image )
            })
        })
    }

     createItems(e) {
        //capture form data
        let item = { 
            'name': e.target.name.value,
            'price': e.target.price.value,
            'rating': e.target.rating.value,
            'store': e.target.store.value,
            'link': e.target.link.value,
            'image': e.target.image.value,
            'list_id': e.this.list_id
        };
        fetch(ITEM_URL, { //post fetch
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    //write the fetch to send it to the back end
        //grab the fetch response
        .then(resp => resp.json())
        .then(item => {
            const { name, price, rating, store, link, image, list_id } = item
            new Item(name, price, rating, store, link, image, list_id)
            document.getElementById('list-form').addEventListener('submit', API.createitems)
            document.getElementById('new-list-form').reset()
        })
        .catch(error => {
            error.message;
        })
    }
}
        //create a new item object
        //clear form
    
    
