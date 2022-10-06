
//This is how we add another movie to the database

$('#submit-btn').click(function(e){
    e.preventDefault();
    let title = $("#userInput-title").val();
    let rating = $('#userInput-rating').val();
    console.log(title)

    // This will how we access
    const moviesURL = "https://giddy-chalk-horse.glitch.me/movies";

//Post to movies array

    const moviesToPost = {
        rating: `${rating}`,
        title: `${title}`,
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'},
        body: JSON.stringify(moviesToPost)
    }

    function getMovies(){
        fetch(moviesURL, postOptions)
            .then( response => console.log(response)) /* review was created successfully */
            .catch( error => console.error(error)); /* handle errors */
    }

    getMovies();

})

const moviesURL = "https://giddy-chalk-horse.glitch.me/movies";
fetch(moviesURL)
    .then( response => response.json())
    // .then(data => console.log(data[0]))
    .then( data => {$('#editTitle').val(`${data[0].title}`);
        $('#editRating').val(`${data[0].rating}`)}
        )

    .then( data => $('#editRating').val(`${data[0].rating}`))

async function getMovies() {
    let url = moviesURL;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderMovies() {
    let movies = await getMovies();
    let html = '';
    movies.forEach((movie, index) => {

        let htmlSegment = `<div class="card w-50">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="middle card-text">Movie rating: ${movie.rating}</p>
                <a href="#" data-id="${movie.id}" class="delete-button btn btn-primary">Delete</a>
                <a href="#" data-id="${movie.id}" class="edit-button btn btn-primary">Edit</a>
            </div>
            <div class="edit-form" style="visibility: hidden">
               <input class="editTitle" value="${movie.title}" placeholder="title">
               <input class="editRating" value ="${movie.rating}" placeholder="rating">
               <button class=sub-1">Submit</button>
            </div>
        </div>`

        html += htmlSegment;
    });
    $('.middle').append(html)
}

renderMovies();


//delete user
$(document).on('click', ".delete-button", function(e){
    e.preventDefault();
    let cardID = $(this).attr('data-id')
    console.log(cardID);

    const moviesURL = "https://giddy-chalk-horse.glitch.me/movies";

//Post to movies array

    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'}
    }


    fetch(`${moviesURL}/${cardID}`, deleteOptions)
        .then(renderMovies);/* review was created successfully */

// fix how to fully delete without refreshing
})

$(document).on('click', ".edit-button", function (e){
    e.preventDefault();
    $('.edit-form').css("visibility", 'visible');
})


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



