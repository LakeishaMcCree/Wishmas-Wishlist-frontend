document.addEventListener("DOMContentLoaded", function() {
    // do whatever has to happen first in your application
    //for our application, we're going to need to load in our Christmas lists
    // this looks like a get fetch request to our back end to load in the lists. This will live in the API class.
    API.addLists()
    // If we have any event listeners that we need to get apended to the page when it loads, the should get appended here too.

})