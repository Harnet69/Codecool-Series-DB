import{getShowSeasons, getShowByGenre} from "./data_handler.js"

// add listener to seasons button
export function setListenerToShowSeasonBtn() {
    let showSeasonsBtns = document.getElementsByClassName('showBtn');

    for(let showSeasonsBtn of showSeasonsBtns) {
        let showId = showSeasonsBtn.getAttribute('data-showbtn');
        showSeasonsBtn.addEventListener('click', function showSeasonsBtnEvLis() {
            getShowSeasons(showId, showSeasonsBtn);
        });
    }
}

// add listener to genres
export function setListenerToShowGenreLi() {
    let showGenreLis = document.getElementsByClassName('genre_li');

    for(let showGenreLi of showGenreLis) {
        let showGenre = showGenreLi.getAttribute('data-genre');
        showGenreLi.addEventListener('click', function showGenreLies() {
            getShowByGenre(showGenre, showGenreLi);
        });
    }
}