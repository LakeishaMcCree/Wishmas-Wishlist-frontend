const BASE_URL = "http://localhost:3000"
const LIST_URL = `${BASE_URL}/lists`
const ITEM_URL = `${BASE_URL}/items`

document.addEventListener("DOMContentLoaded", function(){
   //fetch and load the lists
    API.getList()
    API.getItem()

    //event listener and handler for the create list form
    document.getElementById('form').addEventListener('submit', API.createList)
})

//DOM Top
const bodyTag = document.querySelector('body')
const topDiv = document.createElement('div')






