document.addEventListener("DOMContentLoaded", function(){
   //fetch and load the lists
    API.loadLists()
    API.loadFormListener()
    anniversaryButton()
    birthdayButton()
    fatherButton()
    motherButton()
    wishmasButton()
})  
    

    function anniversaryButton() {
        const anniversary = document.querySelector("#anniversary")
        let anni = document.querySelector('h1')

        anniversary.addEventListener('click', e => {
            anni.innerHTML = "Anniversary Wishlist!"
        })             
    }
  
    function birthdayButton(){
        const birthday = document.querySelector("#birthday")
        let birth = document.querySelector('h1')

        birthday.addEventListener('click', e => {
            birth.innerHTML = "Birthday Wishlist!"
        })   
    }

    function fatherButton(){
        const father = document.querySelector("#fatherDay")
        let fath = document.querySelector('h1')
    
            father.addEventListener('click', e => {
                fath.innerHTML = "Father's Day Wishlist!"
            })   
        }

        function motherButton(){
        const mother= document.querySelector("#motherDay")
        let moth = document.querySelector('h1')
        
            mother.addEventListener('click', e => {
                moth.innerHTML = "Mother's Day Wishlist!"
            })   
        }

    function wishmasButton(){
    const wishmas = document.querySelector("#wishmas")
    let wish = document.querySelector('h1')

        wishmas.addEventListener('click', e => {
            wish.innerHTML = "Wishmas Wishlist!"
        })   
    }
    