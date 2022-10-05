// This will how we access
const moviesURL = "https://giddy-chalk-horse.glitch.me/movies";

function getMovies(){
    fetch("https://misty-glow-driver.glitch.me/movies").then(resp => resp.json()).then(data=>console.log(data));
}

getMovies();

//Post to movies array

const moviesToPost = {
    actors: "Josh Hartnett, Ewan McGregor, Tom Sizemore, Eric Bana",
    director: "Ridley Scott",
    genre: "Drama, History, War",
    plot: "160 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
    poster: "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    rating: "5",
    title: "down",
    year: "2001"
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(moviesToPost)
}

function getBooks(){
    fetch(`${moviesURL}`, postOptions).then(resp => resp.json()).then(data=>console.log(data));
}

getBooks();











// The R in CRUD: Read



// The C in CRUD: Create


//
// const postOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(bookToPost)
// }
// //

//
// getBooks();
//
// // fetch(booksURL, postOptions).then(getBooks);
//
// // The U in CRUD: Updating with PUT and PATCH requests
// // We'll use PUT to replace the entire content
// // We'll use PATCH to modify only part of the entry
//
// let modification = {
//     title: "Eleanor of Aquitaine: Queen of France, Queen of England"
// }
//
// const patchOptions = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(modification)
// }
//
// // fetch(booksURL + "/1", patchOptions).then(getBooks);
//
// modification = {
//     title: "Eleanor of Aquitaine and the Four Kings",
//     author: {
//         firstName: "Amy",
//         lastName: "Kelly"
//     }
// }
//
// const putOptions = {
//     method: 'PUT',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(modification)
// }
//
// // fetch(booksURL + "/1", putOptions).then(getBooks);
//
// // THE D IN CRUD -- Delete
//
// const deleteOptions = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type' : 'application/json'
//     }
// }
//
// fetch(booksURL + "/1", deleteOptions).then(getBooks);



