const endPoint = "http://localhost:3000/lists"

document.addEventListener("DOMContentLoaded", function() {
    getLists()
    // do whatever has to happen first in your application
    //API.addItems()
    //for our application, we're going to need to load in our Christmas lists
    //const createListForm = document.querySelector("#create-list")
    
    
    
    // If we have any event listeners that we need to get apended to the page when it loads, the should get appended here too.

})

function getLists(){
    fetch(endPoint) //get request
    .then(resp => resp.json())
    .then(lists => {
        lists.forEach(list => {
            let newList = new List(list)
            document.querySelector("#wishmas-wishlist-container").innerHTML += newList.renderList()
        })
        //addListsToPage(lists);

    })
}

//function addListstoPage(lists){
    
    //lists.forEach(function(list))
//}