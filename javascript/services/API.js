class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my lists
    static addLists(){
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