import {popUpWindow, createTableSHowsByGenre, createTableAllShows} from "./dom_manipulations.js";
import {removeElemByClass} from "./dom_manipulations.js";

// add listener to button and fires pop up window
export function getShowSeasons(show_id, showSeasonsBtn) {
    let request = new XMLHttpRequest();  // instantiate a new Request

    request.addEventListener('load', function () { // add an event listener to the load event of the request
        let responseData = JSON.parse(this.response);  // parse JSON format into JS object
        // all magic fires here
        popUpWindow(showSeasonsBtn, responseData); // display received data with seasons on popup window
        return(responseData); // response with data from database
    });
    request.open('GET', '/get_from_db/'+show_id);  // set the method and the path
    request.send();  // actually fire the Request
}

// add listener to li and generate the table of shows by a genre
export function getShowByGenre(showGenre, showGenreLi) {
    removeElemByClass('showInfo'); // clear a table of show details
    let request = new XMLHttpRequest();  // instantiate a new Request

    request.addEventListener('load', function () { // add an event listener to the load event of the request
        // console.log(this.response);
        let responseData = JSON.parse(this.response);  // parse JSON format into JS object
        // all magic fires here
        // console.log("Server responded: ", responseData);
        createTableSHowsByGenre(showGenreLi, responseData);// display received data with shows by genre
        return(responseData); // response with data from database
    });
    request.open('GET', '/get-shows-by-genre/'+showGenre);  // set the method and the path
    request.send();  // actually fire the Request
}

// generate the table of all shows
export function getAllShows() {
    let request = new XMLHttpRequest();  // instantiate a new Request

    request.addEventListener('load', function () { // add an event listener to the load event of the request
        // console.log(this.response);
        // let responseData = JSON.parse(this.response);  // parse JSON format into JS object
        // all magic fires here
        // console.log("Server responded: ", responseData);
        // createTableAllShows(responseData);// display received data with shows by genre
        // return(responseData); // response with data from database
    });
    request.open('GET', '/get-all-shows');  // set the method and the path
    request.send();  // actually fire the Request
}







// // get data from API
// function getData(data) {
//     fetch('/get_from_db')  // set the path; the method is GET by default, but can be modified with a second parameter
//         .then((response) => response.json())  // parse JSON format into JS object
//         .then((data) => {
//             console.log(data);
//         });
// }

// // add listener to submit from login form
// export function submitFromLoginForm(loginForm) {
//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault(); // blocking default 'submit by form request' functionality
//
//         const formData = new FormData(this);
//
//         fetch('/login',{
//             method: "post",
//             body: formData
//         }).then(function (response) { // when the response come back
//             return response.text();
//         }).then(function (text) {
//             console.log(typeof(text)+"DO all stuff there "+text);
//         }).catch(function (error) {
//             console.error(error);
//         })
//     })
// }