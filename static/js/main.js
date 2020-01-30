import {setListenerToShowSeasonBtn, setListenerToShowGenreLi, setListenerToAuthor_movie} from "./listeners.js"
import {getAllShows} from "./data_handler.js"
// add listener to all Seasons buttons
setListenerToShowSeasonBtn();
setListenerToShowGenreLi();
// getAllShows();
setListenerToAuthor_movie();
