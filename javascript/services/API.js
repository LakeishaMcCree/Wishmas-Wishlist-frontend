class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static getLists() {
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists => {
            lists.forEach(list => {
                const{id, name, list_notes} = list 
                new List(id, name, list_notes)
            })
        })
    }

    static addItem(e) {
        e.preventDefault()
        //capture form data
        let data = {'item': {
            'name': e.target.name.value,
            'price': e.target.price.value,
            'rating': e.target.rating.value,
            'store': e.target.store.value,
            'link': e.target.link.value,
            'image': e.target.image.value,
            'list_id': e.this.list_id
        }
    };
    //write the fetch to send it to the back end

    fetch('http://localhost:3000/lists/${id}/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) 
        })
        //grab the fetch response
        .then(resp => resp.json())
        .then(item => {
            const { name, price, rating, store, link, image, list_id } = item
            new Item(name, price, rating, store, link, image, list_id)
            document.getElementById('list-form').reset()

        //create a new item object
        //clear form

    //static createItems(e) {
        //let id = e.target.dataset.id
        //fetch("http://localhost:3000/lists/${id}/items")
        //.then(resp => resp.json())
        //.then(items => {
            //items.forEach(list => {
                //const{id, name, price, rating, store, link, image, list_id} = item
                //new Item(id, name, price, rating, store, link, image, list_id)
            //})
       // })
   // }

    
        
        
        })
    }
}
//class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.

//function postItem(name, price, number, store, url, image) {
  //  const listData = {name, price, number, store, url, image}
    //fetch("http://localhost:3000/lists", {
        //POST Request
      //  method: "POST",
        //headers: {"Content-Type": "application/json"},
        //body: JSON.stringify(bodyData)
    //})
    //.then(resp => resp.json())
    //.then(list => {
      //  const listData = list.data
        // render JSON response

//*function createFormHandler(e) {
    //e.preventDefault()
    //const nameInput = document.querySelector('#input-name').value
   // const priceInput = document.querySelector('#input-price').value
   // const numberInput = document.querySelector('#input-number').value
   // const storeInput = document.querySelector('#input-store').value
   // const urlInput = document.querySelector('#input-url').value
   // const imageInput = document.querySelector('#input-image').value
   // postItem(nameInput, priceInput, numberInput, storeInput, urlInput, imageInput)
//}


   // })