const BASE_URL = "http://localhost:3000"
const LIST_URL = `${BASE_URL}/lists`
const ITEM_URL = `${BASE_URL}/items`

document.addEventListener("DOMContentLoaded", function() {
   //fetch and load the lists
    API.getLists()
    API.addItem()

    //event listener and handler for the create list form
    document.getElementById('new-list-form').addEventListener('submit', )

})






