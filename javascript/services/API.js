class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static addItems(){
        fetch("http://localhost:3000/lists") //read fetch
        .then(resp => resp.json())
        .then(lists => {
            lists.forEach(list => {
                const{id, name, list_notes} = list 
                new List(id, name, list_notes)
            
            })
        })

    }
}
//class level method that is fetching all of our lists then creating a new list object then creating a new list object for all of our lists.
