document.addEventListener("DOMContentLoaded", function(){
   //fetch and load the lists
    API.loadLists()
    API.loadFormListener()
    
})
    const formName = document.getElementById("name")
    const formListNotes = document.getElementById("list_notes")
    const formItemName = document.getElementById("item_name")
    const formItemPrice = document.getElementById("item_price")
    const formItemRating = document.getElementById("item_rating")
    const formItemStore = document.getElementById("item_store")
    const formUrl = document.getElementById("url")
    const formImg = document.getElementById("img")
    const listForm = document.getElementById("add-item-form")

    function listInfo(e) {
        return {
        name: e.target.querySelector('#name').value, 
        list_notes: e.target.querySelector('#list_notes').value, 
        item_name: e.target.querySelector('#item_name').value, 
        item_price: e.target.querySelector('#item_price').value, 
        item_rating: e.target.querySelector('#item_rating').value, 
        item_store: e.target.querySelector('#item_store').value,
        url: e.target.querySelector('#url').value, 
        img: e.target.querySelector('#img').value    
    }
}

function clearForm() {
    document.querySelector('#name').value = ""
    document.querySelector('#list_notes').value = ""
    document.querySelector('#item_name').value = ""
    document.querySelector('#item_price').value = ""
    document.querySelector('#item_rating').value = ""
    document.querySelector('#item_store').value = ""
    document.querySelector('#url').value = ""
    document.querySelector('#img').value = ""
   }
